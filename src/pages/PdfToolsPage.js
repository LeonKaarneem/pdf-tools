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
        console.log("file", event.target.files[0]);
        extractPdfBase64(event.target.files[0])
    }

    const extractPdfBase64 = (file) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file)

        fileReader.onloadend = function (event) {
            convertDataURIToBinary(event.target.result)
        }
    }

    function convertDataURIToBinary(dataURI) {

        const base64Index = dataURI.indexOf(';base64,') + ';base64,'.length;
        const base64 = dataURI.substring(base64Index);
        const raw = window.atob(base64);
        const rawLength = raw.length;
        const array = new Uint8Array(new ArrayBuffer(rawLength));

        for (let i = 0; i < rawLength; i++) {
            array[i] = raw.charCodeAt(i);
        }
        console.log(array)

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