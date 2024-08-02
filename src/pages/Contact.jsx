import React from 'react'
import './Contact.css';

export const Contact = () => {
  return (
    <div className='contact'>  
    <div class="feedback-section">
    <div class="feedback-form">
        <h2>Feedback Form</h2>
        <br/>
        <form action="your_feedback_script.php" method="post">
            <div class="form-group">
                <label for="name">Company Name:</label>
                <input type="text" id="name" name="name" required/>
            </div>
            <div class="form-group">
                <label for="email">Company Email:</label>
                <input type="email" id="email" name="email" required/>
            </div>
            <div class="form-group">
                <label for="message">Message:</label>
                <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <div class="form-group">
                <input type="submit" value="Submit"/>
            </div>
        </form>
    </div>
    <div class="contact-details">
        <h2>Contact Us</h2>
        <p>Company Name: ShineJems</p>
        <p>Address: NCR west zone, New Delhi, India</p>
        <p>Email: weareshinejems@gmail.com</p>
        <p>Phone: +91 77777777</p>
        <img src="https://www.thestatesman.com/wp-content/uploads/2020/04/googl_ED.jpg" alt="" height="281px" width="494px"/>
    </div>
</div>

</div> 
  )
}