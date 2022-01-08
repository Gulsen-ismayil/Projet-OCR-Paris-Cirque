import './ContactUs.css';

const ContactUs = () => {
    return (
        <div class="container">
            <h3>Contact Us</h3>

            <form className="contact ">

                       <div className='contact-form'  >
                          <label htmlFor="name">Name</label>
                          <input className='contact-input'  id="name" name="name"   type="text" />
                       </div>

                       <div className='contact-form' >
                          <label htmlFor="name">E-mail</label>
                          <input className='contact-input' id="email" name="email" type="email" />
                       </div>

                       <div className='contact-form' >
                           <label htmlFor="name">Phone</label>
                           <input className='contact-input' id="phone" name="phone" type="phone" />
                       </div>

                       <div className='contact-form' >
                           <label htmlFor="name">Message</label>
                           <textarea className='contact-textarea'  id="text" name="text" required></textarea>
                       </div>
                        
                            <input id="send"  type="submit" value="send" />
                   
            </form>
        </div>
    )
}

export default ContactUs;
