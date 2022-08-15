import Button, {buttonTypes} from "../components/common/Button";
import './PdfToolsPage.css';
import {useState} from "react";

const PdfToolsPage = () => {
    const [pdf, setPdf] = useState(undefined);

    const doSomething = () => {
        console.log("doing somthin");
    }

    const doSomethingS = () => {
        console.log("doing somthin2");
    }

    return (
        <div className="pdf-tools-body">
            <div className="buttons-container">
                <Button onClick={doSomethingS} name="Create new PDF" buttonType={buttonTypes.primary}/>
                <Button onClick={doSomething} name="Upload existing PDF" inputType="file" buttonType={buttonTypes.primary}/>
            </div>
            {pdf
                &&
                <div className="pdf-container">
                    content xd
                </div>
            }

        </div>
    )
}

export default PdfToolsPage;