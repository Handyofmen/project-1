<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hostel Booking</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Header -->
    <header>
        <h1>Student Hostel Booking</h1>
        <nav>
            <a href="#">Home</a>
            <a href="#available-rooms">Available Rooms</a>
            <a href="#booking-form">Book Now</a>
        </nav>
    </header>

    <!-- Available Rooms Section -->
    <section id="available-rooms">
        <h2>Available Rooms</h2>
        <div class="room" data-room="Single Room">
            <h3>Single Room</h3>
            <p>Price: $200/month</p>
            <p>Facilities: Bed, Desk, WiFi, Shared Bathroom</p>
            <button onclick="selectRoom('Single Room')">Select Room</button>
        </div>

        <div class="room" data-room="Double Room">
            <h3>Double Room</h3>
            <p>Price: $300/month</p>
            <p>Facilities: Two Beds, Desk, WiFi, Private Bathroom</p>
            <button onclick="selectRoom('Double Room')">Select Room</button>
        </div>

        <div class="room" data-room="Deluxe Room">
            <h3>Deluxe Room</h3>
            <p>Price: $500/month</p>
            <p>Facilities: Queen Bed, Private Bathroom, WiFi, TV, Mini Fridge</p>
            <button onclick="selectRoom('Deluxe Room')">Select Room</button>
        </div>
    </section>

    <!-- Booking Form Section -->
    <section id="booking-form">
        <h2>Book Your Room</h2>
        <form id="bookingForm">
            <label for="name">Full Name:</label>
            <input type="text" id="name" required><br>

            <label for="email">Email:</label>
            <input type="email" id="email" required><br>

            <label for="studentID">Student ID:</label>
            <input type="text" id="studentID" required><br>

            <label for="selected-room">Selected Room:</label>
            <input type="text" id="selected-room" readonly><br>

            <label for="checkin">Check-in Date:</label>
            <input type="date" id="checkin" required><br>

            <label for="checkout">Check-out Date:</label>
            <input type="date" id="checkout" required><br>

            <button type="submit">Book Now</button>
        </form>
    </section>

    <!-- Footer -->
    <footer>
        <p>Student Hostel Booking &copy; 2024</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
