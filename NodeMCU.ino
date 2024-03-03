#include <WiFi.h>                   //for ESP32
#include <WebServer.h>              //for ESP32
//#include <ESP8266WiFi.h>          //for NodeMCU
//#include <ESP8266WebServer.h>     //for NodeMCU

const char* ssid = "Naman";
const char* password = "naman123";

WebServer server(80);

void handleRoot() {
  File file = SPIFFS.open("/Main.html", "r");
  if (file) {
    server.streamFile(file, "text/html");
    file.close();
  }
}

void handleMain() {
  File file = SPIFFS.open("/Main.html", "r");
  if (file) {
    server.streamFile(file, "text/html");
    file.close();
  }
}

void handlePayment() {
  File file = SPIFFS.open("/Payment.html", "r");
  if (file) {
    server.streamFile(file, "text/html");
    file.close();
  }
}

void setup() {
  Serial.begin(115200);

  // Initialize camera here if needed
  
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }

  Serial.println("Connected to WiFi");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());

  server.on("/", handleRoot);
  server.on("/main", handleMain);
  server.on("/payment", handlePayment);

  server.begin();
  Serial.println("HTTP server started");
}

void loop() {
  server.handleClient();
}
