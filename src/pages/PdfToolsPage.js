import Button, {buttonTypes} from "../components/common/Button";
import './PdfToolsPage.css';
import {useState} from "react";
import {Document, Page} from "react-pdf";
import Pagination from "../components/common/Pagination";

const PdfToolsPage = () => {
    const [pdf, setPdf] = useState(undefined);
    const [pdfData, setPdfData] = useState({currentPage: 1, totalPages: 1});

    const createNewPDF = () => {
        console.log("Create new PDF");
    }

    const successfullyUploadedPDF = ({ numPages }) => {
        setPdfData({currentPage: 1, totalPages: numPages})
    }

    const uploadExistingPDF = (event) => {
        if (event.target.files.length > 1) {
            // more than 1 file selected
            return
        }
        if (event.target.files.length < 1) {
            // no file selected
            return
        }
        if (event.target.files[0].type !== "application/pdf") {
            // pdf wasn't selected
            return
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
                    <Document file={pdf} options={{workerSrc: "pdf.worker.js"}} onLoadSuccess={successfullyUploadedPDF}>
                        <Page pageNumber={pdfData.currentPage}/>
                    </Document>
                    <Pagination currentPage={pdfData.currentPage} totalPages={pdfData.totalPages} />
                </div>
            }

        </div>
    )
}

export default PdfToolsPage;