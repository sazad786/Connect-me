import React from 'react'
import './Contact.css'
import Swal from 'sweetalert2'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "068718f5-ec0a-45bd-aac3-7111de27cd5f");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
              });
        }
      };

  return (


    <div>


    <section className="contact">
        <form onSubmit={onSubmit}>

            {/* <button className='close'><i class='bx bx-x'></i></button> */}

            <h2>Contact Travis</h2>
            <div className="input-box">
                <label>Full Name</label>
                <input type="text" className="field" placeholder='Enter your name' name='name' required />
             
            </div>
            <div className="input-box">
                <label>Email</label>
                <input type="email" className="field" placeholder='Enter your email' name='email' required />
            </div>
            <div className="input-box">
                <label>Your Message</label>
               <textarea name="message" className="field mess" placeholder='Enter your message' required></textarea>
            </div>
            <button type="submit">Send Message</button>
        </form>
    </section>
    </div>
  )
}

export default Contact