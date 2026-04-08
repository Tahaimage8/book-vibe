import React from "react";
import { Link } from "react-router";


const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl text-center">
        <div className="card-body">
          
          {/* Error Code */}
          <h1 className="text-7xl font-extrabold text-error">404</h1>

          {/* Title */}
          <h2 className="text-2xl font-bold mt-2">Page Not Found</h2>

          {/* Description */}
          <p className="text-base-content/70">
            Oops! The page you're looking for doesn’t exist or has been moved.
          </p>

          {/* Actions */}
          <div className="card-actions justify-center mt-4">
            <Link to="/" className="btn btn-primary">
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="btn btn-outline"
            >
              Go Back
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ErrorPage;