import joi from "joi";
const { ValidationError } = joi

const middleware = (err, req, res, next) => {
    let code
    let errdata

    if (err instanceof ValidationError) {
        code = 422
        errdata = {
            mes: err.message
        }
    }
    return res.status(code).json(errdata)
}

export default middleware