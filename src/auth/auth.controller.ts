import { Body, Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { loginUserDto } from './loginUser.dto';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ){}

    @Post("/login")
    async login(@Body() loginDto: loginUserDto , @Res() res){
        return await res.json(await this.authService.login(loginDto))
    }

    @Get("/profile")
    @UseGuards(JwtAuthGuard)
    async getProfile(@Req() req){
        return await req.user
    }
}

