const Newsletter = () => {
  return (
    <div className=" relative top-40 z-30 w-11/12 mx-auto p-4 border rounded-xl my-8 bg-[#FFFFFF26] backdrop-blur-lg">
    <div className="bg-white rounded-lg">
    <div className="h-96 flex  flex-col  space-y-6 justify-center items-center  mx-auto bg-imagebg rounded-lg">
     
     <div className="text-center space-y-4">
       <h1 className="text-3xl font-bold">Subscribe to our Newsletter</h1>
       <h5 className="text-lg font-medium text-head1">Get the latest updates and news right in your inbox!</h5>
     </div>
     <div className="flex gap-4">
     <input type="text" placeholder="Enter your email" className="input input-bordered w-full max-w-xs" />
     <button className="btn bg-btnimage1 font-bold">Subscribe</button>
     </div>
 </div>
    </div>
    </div>
  );
};

export default Newsletter;
