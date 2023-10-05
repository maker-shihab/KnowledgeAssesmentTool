import { RiArrowGoBackFill } from 'react-icons/ri';
import { TbFaceIdError } from 'react-icons/tb';
import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div id="error-page">
      <div>
        <span><TbFaceIdError /></span>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
          <Link to='/' className='btn_error'><RiArrowGoBackFill /> Back Home</Link>
        </p>
      </div>
    </div>
  );
}
