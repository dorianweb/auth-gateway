import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from './dto/user.create.dto';

@Controller('auth')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('ping')
  pingAuthService() {
    return this.appService.pingAuthService();
  }
  @Get('login')
  dd() {
    // return this.appService.hi();
  }


  @Post('user/create')
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.appService.createUser(createUserDto);
  }

  @Get('user/:email')
  getUser(@Param('email') email: string) {
    return this.appService.getClientByEmail(email);
  }

}
