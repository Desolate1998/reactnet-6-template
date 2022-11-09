namespace Domain.ApiResponseModel
{
    /// <summary>
    /// Base response exception object
    /// </summary>
    public class ResponseException
    {
        /// <summary>
        /// Default class constructor
        /// </summary>
        /// <param name="message">Rhe exception message</param>
        /// <param name="exceptionId">Guid id for tracking the exception</param>
        public ResponseException(string message , Guid? exceptionId = null)
        {
            Message = message;
            ExceptionId = exceptionId;
        }

        /// <summary>
        /// The exception message.
        /// </summary>
        public string Message { get; set; }

        /// <summary>
        /// The exception Id for tracking
        /// </summary>
        public Guid? ExceptionId { get; set; }
    }
}