import Button, { buttonTypes} from "../components/common/Button";

const PdfToolsPage = () => {
    return (
        <div>
            <div>
                <Button name="Create new PDF" type={buttonTypes.primary} />
                <Button name="Upload existing PDF" type={buttonTypes.primary} />
            </div>
        </div>
    )
}

export default PdfToolsPage;