import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../errors/custom-error';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log('is valid');
  console.log(err instanceof CustomError);
  console.log('err: ', err);
  console.log('instance.constructor.name', err.constructor.name);
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  console.error(err);
  res.status(500).send({
    errors: [
      {
        message: err.message,
      },
    ],
  });
};
