let img1 = "https://tailwindcss.com/_next/static/media/kids-jumper.47a06f045002a3e6ba595351a36a46eb.jpg"

const Card = () => {
    return (
    <div className="flex items-center">
        <div className="border-8 border-slate-100 rounded-2xl">
          <img src={img1} alt="" className="images" />
        </div>
        <div className="bodyCard">
            <div className="p-8">
                <h2 className="text-3xl">Juan Sebastian</h2>
                <h2 className="text-3xl">Calle Loaiza</h2>
            </div>
        </div>
    </div> )
}

export default Card