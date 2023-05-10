import { RequestContextModule } from '@medibloc/nestjs-request-context';
import { Module } from '@nestjs/common';
import { UserContextProvider } from './user-context.service';

@Module({

  imports: [RequestContextModule.forRoot({
    contextClass: UserContextProvider,
    isGlobal: true,
  }),],
  providers: [UserContextProvider]
})
export class UserContextModule { }