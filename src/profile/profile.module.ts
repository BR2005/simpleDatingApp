import { Module } from '@nestjs/common';
import { ProfileController } from './profile.controller';
import { ProfileGuard } from './profile.guard';
import { ProfileService } from './profile.service';

@Module({
  controllers: [ProfileController],
  providers: [ProfileService, ProfileGuard]
})
export class ProfileModule {}
