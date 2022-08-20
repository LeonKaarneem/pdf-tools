import Button, {buttonTypes} from "../components/common/Button";
import './PdfToolsPage.css';
import {useState} from "react";
import {Document, Page} from "react-pdf";

const PdfToolsPage = () => {
    const [pdf, setPdf] = useState(undefined);

    const createNewPDF = () => {
        console.log("Create new PDF");
    }

    const uploadExistingPDF = (event) => {
        console.log(event.target.files)
        if (event.target.files.length > 1) {
            console.log("more than 1 file selected")
        }
        if (event.target.files.length < 1) {
            console.log("no file selected")
        }
        if (event.target.files[0].type !== "application/pdf") {
            console.log("pdf wasn't selected")
        }
        setPdf(event.target.files[0])
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
                    <Document file={pdf} options={{workerSrc: "pdf.worker.js"}}>
                        <Page pageNumber={1}/>
                    </Document>
                </div>
            }

        </div>
    )
}

export default PdfToolsPage;