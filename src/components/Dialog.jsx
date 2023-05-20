// ./components/Dialog.jsx
import {useEffect, useRef} from "react";

function Dialog(props) {
    const ref = useRef(null);

    useEffect(() => {
        console.log(ref);
        if (props.isShowing) {
            ref.current?.showModal();
        } else {
            ref.current?.close();
        }
    }, [props.isShowing]);

    return <dialog ref={ref}>{props.children}</dialog>;
}

export default Dialog;
