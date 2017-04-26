import classNames from "classnames";

const Button = props => {
    const cssclasses = classNames("button", props.className);
    return props.href ?
        <a {...props} className={cssclasses}/>:
        <button {...props} className={cssclasses}/>
};

Button.propTypes={
    href: PropTypes.string,
};

export default Button;