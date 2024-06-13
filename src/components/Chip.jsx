export default ({ content, color }) => {
    console.log(color)
    return (
        <div style={{ backgroundColor: color }} className={`px-6 py-2 rounded-lg font-semibold border-2  ${color === '#000000' ? 'border-white text-white' : 'border-black text-black'}`}>
            {content}
        </div>
    )
}