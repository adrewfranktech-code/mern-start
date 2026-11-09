
import css from "./index.module.css"
export default (props)=>{
    return <>
    <div className="w-fit ">
        <div>
            <span className={css.font + (!props.order?' text-border-black':'') + ' f-f-M bold size-80px ' } style={{ color:!props.order&&props.color}}>
                {props.order?props.title1:props.title2}
            </span>
            <span className={css.font + ' f-f-M  bold size-80px '  + (props.order?' text-border-black':'')} style={{ color:props.order&&props.color}}>
                {props.order?props.title2:props.title1}
            </span>
        </div>
    </div>
    </>
}