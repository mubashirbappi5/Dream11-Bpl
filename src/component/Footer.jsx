

const Footer = () => {
    return (
        <div >
            <footer className=" bg-[#06091a] text-neutral-content  pt-40 pb-5 px-10">
                <img className="mx-auto mb-14" src="https://i.ibb.co.com/FxqNW9f/logo-footer.png" alt="" />
  <div className="w-11/12 grid grid-cols-1 md:grid-cols-3 mx-auto footer">
  <nav className=" w-36">
    <h6 className=" text-white">About Us</h6>
    <p className="text-head3">you create your ideal fantasy cricket team from top international players.</p>
  </nav>
  <nav className="text-head3">
    <h6 className=" text-white">Quick Links</h6>
    <li className="link link-hover"> Home</li>
    <li className="link link-hover">Services</li>
    <li className="link link-hover">About</li>
    <li className="link link-hover">Contact</li>
  </nav>
  <nav>
  <h6 className=" text-white">Newsletter</h6>
  <fieldset className="form-control max-w-80">
      <label className="label ">
        <span className="label-text text-head3">Subscribe to our newsletter for the <br />
         latest updates.</span>
      </label>
      <div className="join">
        <input
          type="text"
          placeholder="username@site.com"
          className="input join-item" />
        <button className="btn bg-btnimage2 border-none join-item">Subscribe</button>
      </div>
    </fieldset>
  </nav>
  
  </div>
  <div className="mt-16">
  <div className="border-t border-gray-500 my-4"></div>
  <p className="text-center text-sm">@2024 Cricket11 All Rights Reserved.</p>
  </div>
 
</footer>

            
        </div>
    );
};

export default Footer;