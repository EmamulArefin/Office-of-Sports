import { Controller,Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateStudentDTO } from './studentDTO/studentdto.dto';
import { ValidateDTO } from './studentDTO/studentdto.dto';

@Controller('auth')
export class AuthController {
    constructor(private AuthService: AuthService){}

    @Post('register')
    async register(@Body()createdto:CreateStudentDTO):Promise<any>{

        return this.AuthService.register(createdto);

    }

    @Post('login')
    login(@Body() validator: ValidateDTO ): Promise<any>{
        return this.AuthService.login(validator);
    }

}
