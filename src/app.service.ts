import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs';

@Injectable()
export class AppService {
  constructor(
    @Inject("AUTH_SERVICE") private readonly clientAuthService: ClientProxy,
    @Inject("USER_SERVICE") private readonly clientUserService: ClientProxy
  ) { }

  pingAuthService() {
    const startTs = Date.now();
    const pattern = { cmd: "index/ping" };
    const payload = {};
    return this.clientAuthService
      .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message, duration: Date.now() - startTs }))
      );
  }
  // login() {
  //   const pattern = { cmd: "auth/login" };
  //   const payload = {};
  //   return this.clientAuthService
  //     .send<string>(pattern, payload)
  //     .pipe(
  //       map((message: string) => ({ message }))
  //     );
  // }

  getClientByEmail(email: string) {
    const pattern = { cmd: "user/get" };
    const payload = { email };
    return this.clientAuthService
      .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message }))
      );
  }
  createUser(user: any) {
    const pattern = { role: "user", cmd: "user/create" };
    const payload = user;
    return this.clientUserService
      .send<string>(pattern, payload);
  }

  hi() {
    const pattern = { cmd: "hello" };
    const payload = {};
    return this.clientUserService
      .send<string>(pattern, payload);
  }

}