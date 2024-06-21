import './Contact.css'
function Contact() {
    return <div className='contact'>
        <div className='contactdetails'>
            <h2 className='contactus'>CONTACT US</h2>
            <img src='https://www.starbucks.com/contact/' alt=""></img>
            <input className='input' type="text" placeholder='Your Name' />
            <input className='input' type="text" placeholder='Contact No.' />
            <input className='input' type="text" placeholder='Email' />
            <input className='input' type="text" placeholder='Subject' />
            <textarea className='inputtext' placeholder='message' name="" id="" cols="60" rows="7"></textarea>
            <button className="order">Submit</button>

        </div>

    </div>
}
export default Contact;