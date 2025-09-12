export default function CV(){
    return <div className="bg-gray-100 ww-full flex justify-center">
     <div className="w-full h-screen flex justify-center items-center">
      <iframe
        src="/resume.pdf"
        width="80%"
        height="90%"
        title="My Resume"
        className="rounded-xl shadow-lg border"
      />
     
    </div>
    </div>
}