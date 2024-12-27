import './input.tsx.css';
function Input() {
    return (
        <div>
            <div className="df g8px fdc">
            <label className="text-md fw5">Email</label>
            <div className="df aic  g8px p8px12px bgc-fff br8px g8px b1px-s-gray300 shadow-xs xw400px">
                <div className="df jcsb aic w100p g8px text-lg ">
                    <input className="oln bn w100p " placeholder="hell@somemail.com"></input>``
                    <span className="df">
                        <svg className="w18px h18px stroke-gray400 stroke-width2px stroke-linecap-round stroke-linejoin-round fill-none">
                            <use href="http://acss-ui.test/icons/feather-sprite.svg#help-circle"></use>
                        </svg>
                    </span>
                </div>
            </div>
            <small className="text-sm c-gray500">This is the user hint</small>
        </div>
        </div>
    );
}

export default Input;