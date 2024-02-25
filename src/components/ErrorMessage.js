
export default function ErrorMessage({ message }) {
    return (
        <div>
            <p className="error-message" >
                <span>! </span>
                {message}
            </p>
        </div>
    )
}