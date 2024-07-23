import {landing, app} from "../assets/index"
const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
        <div className="bg-white rounded-lg shadow-md py-8 
        flex flex-col gap-5 text-center -mt-16">
            <h1 className="text-5xl font-bold tracking-tight text-orange-400">
                Indulge in a delicious takeaway treat today!
            </h1>
            <span className="text-xl">Satisfy your cravings with just one click!</span>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
            <img src={landing} alt="landing" />
            <div className="flex flex-col items-center justify-center gap-4 text-center">
                <span className="font-bold text-3xl tracking-tighter">
                    Order takeaway even faster!
                </span>
                <span>
                    Download RapidGo App for faster ordering 
                    and personalized recommendations
                </span>
                <img src={app} alt="app" />
            </div>
        </div>
    </div>
  )
}

export default HomePage;