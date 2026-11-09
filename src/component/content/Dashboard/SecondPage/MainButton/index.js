



export default (props)=>{
    return <>
        <div className="p-x-32px p-y-16px w-fit" style={{border:`1px solid ${props.bColor}` , backgroundColor:props.backColor ,borderRadius:"100px"}}>
            {props.children}
        </div>
    </>
}