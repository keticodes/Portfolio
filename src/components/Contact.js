import React from 'react';

function Contact() {
  return (
    <section>
      <h2>Contact Me</h2>
      <form>
        <div>
          <label for="name">Name</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label for="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label for="message">Message</label>
          <textarea id="message"></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;