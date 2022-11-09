namespace Domain.ApiResponseModel
{
    /// <summary>
    /// ApiResponse class that is used as a top level response for the API contains 
    /// the data transfer object of the API or a user friendly exception. 
    /// </summary>
    /// <typeparam name="TResponseType">Generic response object can contain the API response object</typeparam>
    public class ApiResponse<TResponseType>
    {
        /// <summary>
        /// Default class constructor
        /// </summary>
        /// <param name="data">The API response data</param>
        /// <param name="isSuccessful">Indication weather the request is successfull or not</param>
        /// <param name="errors"></param>
        public ApiResponse(TResponseType? data, bool isSuccessful, List<ResponseException> errors)
        {
            Data = data;
            IsSuccessful = isSuccessful;
            Errors = errors;
        }
        /// <summary>
        /// Default empty class constructor
        /// </summary>
        public ApiResponse()
        {
        }

        /// <summary>
        /// The API response object.
        /// </summary>
        public TResponseType? Data { get; set; }

        /// <summary>
        /// Indication if the request was successful or not
        /// </summary>
        public bool IsSuccessful { get; set; }

        /// <summary>
        /// List of user friendly message exceptions that occurred during the execution of the API 
        /// </summary>
        /// <value></value>
        public List<ResponseException> Errors { get; set; } = new();
    }
}