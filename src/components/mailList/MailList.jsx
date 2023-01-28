import './mailList.css'

function MailList() {
  return (
    <div className='mail'>
        <div className="mailTitle">Save time, save money!</div>
        <span className="mailDes">Sign up and we'll send the best deals to you</span>
        <div className="mainInputContainer">
            <input type="text" placeholder='Your Email'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default MailList