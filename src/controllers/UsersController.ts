import { Request, Response } from 'express';
import CreateUserService from '../services/ CreateUserService';

class UsersController {
  public async store(request: Request, response: Response): Promise<Response> {
    const {
      collaborator,
      photo_name,
      photo_location,
      register_date,
      signature,
    } = request.body;

    const { filename } = request.file;

    const createUserService = new CreateUserService();

    const user = await createUserService.execute({
      collaborator,
      photo_name,
      photo_location,
      register_date,
      signature,
      photo: filename,
    });

    return response.json(user);
  }
}

export default new UsersController();
