// Define an array of products with IDs and payment links
var products = [
    {
        id: 1,
        name: 'Red Chips',
        description: 'Dive into a bag of crunch-tastic Red Chips! With their bold flavor and crispy texture, these chips are like a party for your taste buds. Perfect for snacking on-the-go or sharing with friends (if you’re feeling generous)!',
        price: 'MRP: Rs5.00',
        image: 'item1.jpg',
        paymentLink: 'https://rzp.io/l/fsY4Oxz' // Change this to the actual payment link
    },
    {
        id: 2,
        name: 'Blue Chips',
        description: 'Experience the ocean of flavor with Blue Chips! They’re crunchy, delicious, and perfect for anyone looking to snack boldly. Dive in and enjoy the unique taste!',
        price: 'MRP: Rs5.00',
        image: 'item2.jpg',
        paymentLink: 'https://rzp.io/l/Mddwj8F' // Change this to the actual payment link
    },
    {
        id: 3,
        name: 'Yellow Chips',
        description: 'Bright and cheerful, Yellow Chips bring sunshine to your snack time! With a delightful crunch and a hint of zest, they’re perfect for sharing or enjoying solo.',
        price: 'MRP: Rs5.00',
        image: 'item3.jpg',
        paymentLink: '0' // Indicates the item is currently unavailable
    },
    {
        id: 4,
        name: 'Green Chips',
        description: 'Go green with these delicious Green Chips! Bursting with flavor, they’re the perfect guilt-free snack for those who love healthy munching.',
        price: 'MRP: Rs5.00',
        image: 'item4.jpg',
        paymentLink: '0' // Indicates the item is currently unavailable
    }
];


// Function to create and append items
function createItems() {
    var itemsContainer = document.getElementById('items');
    products.forEach(function (product) {
        var itemDiv = document.createElement('div');
        itemDiv.className = 'item';
        itemDiv.onclick = function () {
            redirectToPayment(product.id); // Pass product ID
        };

        var imageDiv = document.createElement('div');
        imageDiv.className = 'item-image';

        var img = document.createElement('img');
        img.src = product.image;
        img.alt = product.name;
        imageDiv.appendChild(img);

        var detailsDiv = document.createElement('div');
        detailsDiv.className = 'item-details';
        
        var h2 = document.createElement('h2');
        h2.textContent = product.name;

        var descriptionDiv = document.createElement('div');
        descriptionDiv.className = 'description collapsed'; // Start collapsed
        descriptionDiv.textContent = product.description;

        var showMoreLink = document.createElement('span');
        showMoreLink.className = 'show-more';
        showMoreLink.textContent = 'Read more';
        
        // Event handler for the 'Read more' link
        showMoreLink.onclick = function (event) {
            event.stopPropagation(); // Prevent click event on itemDiv
            descriptionDiv.classList.toggle('expanded'); // Toggle expanded class

            // Change link text based on the state
            if (descriptionDiv.classList.contains('expanded')) {
                showMoreLink.textContent = 'Show less'; // Change to 'Show less' when expanded
            } else {
                showMoreLink.textContent = 'Read more'; // Revert to 'Read more' when collapsed
            }
        };

        var p2 = document.createElement('p');
        p2.className = 'price';
        p2.textContent = product.price;

        detailsDiv.appendChild(h2);
        detailsDiv.appendChild(descriptionDiv);
        detailsDiv.appendChild(showMoreLink);
        detailsDiv.appendChild(p2);

        itemDiv.appendChild(imageDiv);
        itemDiv.appendChild(detailsDiv);
        
        itemsContainer.appendChild(itemDiv);
    });
}

// Call the function to create items
createItems();

function redirectToPayment(productId) {
    // Store product ID in localStorage
    localStorage.setItem('productId', productId);
    
    // Redirect to payment page
    window.location.href = 'payment.html';
}
