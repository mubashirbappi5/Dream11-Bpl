import PropTypes from 'prop-types'

const Banner = ({handleClaimbtn}) => {
    return (
        <div>
            <div
  className="hero min-h-screen rounded-2xl bg-black"
  style={{
    backgroundImage: "url(https://i.ibb.co.com/KWG2MtF/bg-shadow.png)",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize:"cover",
  }}>
  <div className="hero-overlay bg-opacity-60 rounded-2xl"></div>
  <div className="hero-content text-neutral-content ">
    <div className=" flex flex-col justify-center items-center">
      <img src="https://i.ibb.co.com/2N0DYMY/banner-main.png" alt="" />
      <h1 className=" text-4xl font-bold text-white  my-6 text-center">Assemble Your Ultimate Dream 11 Cricket Team</h1>
      <p className="mb-8 text-head2">
      Beyond Boundaries Beyond Limits
      </p>
      <button onClick={handleClaimbtn} className=" btn bg-transparent hover:bg-btnColor border border-btnColor p-0"><p className="bg-btnColor mx-1 px-3 py-3 rounded-lg">Claim Free Credit</p></button>
    </div>
  </div>
</div>
            
        </div>
    );
};
Banner.propTypes={
  handleClaimbtn: PropTypes.func.isRequired,
}

export default Banner;