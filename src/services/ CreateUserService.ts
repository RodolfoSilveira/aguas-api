import { getRepository } from 'typeorm';
import * as Yup from 'yup';
import User from '../models/User';
import AppError from '../errors/AppError';

interface Request {
  collaborator: string;
  photo_name: string;
  photo_location: string;
  register_date: string;
  signature: boolean;
  photo: string;
}

class CreateUserService {
  public async execute({
    collaborator,
    photo_name,
    photo_location,
    register_date,
    signature,
    photo,
  }: Request): Promise<User> {
    const schema = Yup.object().shape({
      collaborator: Yup.string().required(),
      photo_name: Yup.string().required(),
      photo_location: Yup.string().required(),
      register_date: Yup.string().required(),
      signature: Yup.bool().required(),
      photo: Yup.string().required(),
    });

    if (
      !(await schema.isValid({
        collaborator,
        photo_name,
        photo_location,
        register_date,
        signature,
        photo,
      }))
    ) {
      throw new AppError(
        'Falha na validação. Informar todos os dados corretamente.',
      );
    }

    const usersRepository = getRepository(User);

    const user = usersRepository.create({
      collaborator,
      photo_name,
      photo_location,
      register_date,
      signature: Boolean(signature),
      photo,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
