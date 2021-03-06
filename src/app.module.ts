import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: "AUTH_SERVICE",
        transport: Transport.TCP,
        options: {
          host: "localhost",
          port: 4000
        }
      },
      {
        name: "USER_SERVICE",
        transport: Transport.TCP,
        options: {
          host: "localhost",
          port: 5000
        }
      },

    ])

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
