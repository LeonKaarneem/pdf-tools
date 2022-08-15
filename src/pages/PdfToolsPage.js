import Button, {buttonTypes} from "../components/common/Button";
import './PdfToolsPage.css';
import {useState} from "react";

const PdfToolsPage = () => {
    const [pdf, setPdf] = useState(undefined);

    const createNewPDF = () => {
        console.log("doing somthin");
    }

    const uploadExistingPDF = (event) => {
        console.log("doing somthin2", event);
    }

    return (
        <div className="pdf-tools-body">
            <div className="buttons-container">
                <Button onClick={createNewPDF} name="Create new PDF" buttonType={buttonTypes.primary}/>
                <Button onClick={uploadExistingPDF} name="Upload existing PDF" inputType="file" buttonType={buttonTypes.primary}/>
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