class ApiResponse {
    constructor(statusCose, data, message = "Success") {
        this.statusCose = statusCose
        this.data = data
        this.message = message
        this.success = statusCose < 400
    }
}