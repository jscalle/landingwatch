
const Banner = ({illust}) => (
    <div className="w-full h-4/6 flex flex-col md:flex-row rounded-tl-3xl rounded-tr-3xl rounded-bl-middle md:rounded-bl-large bg-slate-700 py-14 md:pb-0 md:pt-12">
        <div className="w-1/3 ml-2 md:ml-0 flex justify-center items-center">
            <img src={illust} className="flex justify-center items-center text-slate-100 text-6xl" alt="Illustration" />
        </div>
        <div className="w-2/3 absolute right-1 md:relative flex flex-col mx-auto items-center text-slate-100 text-lg md:text-5xl font-Fredoka md:px-20">
            <p>"<span className="heading">N</span>o te preocupes si no funciona bien. Si todo estuviera correcto, serías despedido de tu trabajo"</p>
            <span className="cita">- Ley de Mosher de la Ingeniería del Software -</span>
        </div>
    </div>
)

export default Banner