import { Result } from 'antd';

const ErrorMessage = () => {

    return(
    <>
    <Result
        status="404"
        title="404"
        subTitle="Sorry, you data not exist  in this page."
        
    />
    </>)
}

export default ErrorMessage;