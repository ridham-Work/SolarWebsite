// app/loading.js
export default function Loading() {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        {/* <div className="w-16 h-16 border-4 border-blue-500 border-solid border-t-transparent rounded-full animate-spin"></div> */}
        {/* <p className="mt-4 text-lg font-medium text-gray-700">Loading...</p> */}
        <iframe 
          src="https://giphy.com/embed/sR0jJKBu71Nnr1ZNVb" 
          width="51" 
          height="80" 
          style={{ marginTop: '0px' }} 
          frameBorder="0" 
          className="giphy-embed" 
          allowFullScreen
        ></iframe>
        {/* <p>
          <a href="https://giphy.com/gifs/energia-solar-set-tecnologia-sustentavel-nR3GsM7EyUtzd25dmJ">
            via GIPHY
          </a>
        </p> */}
      </div>
    );
}
