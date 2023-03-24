import {useRouteError} from 'react-router-dom';

interface ErrorType {
  statusText: string;
  message: string;
}

const NotFound404 = () => {
  const error = useRouteError() as ErrorType;

  return (
    <div
      id="error-page"
      style={{
        display: 'flex',
        justifyContent: 'center',
        height: '80vh',
        alignItems: 'center',
        textAlign: 'center',
      }}>
      <div>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
};

export default NotFound404;
