import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import {UpdateProfileDto } from './dto/update-profil.dto';
import { ProfileService } from './profile.service';
import { ProfileGuard } from './profile.guard';

@Controller('profile')
export class ProfileController {
    constructor(private profileService: ProfileService) {}

    @Get()
    findAll()
    {
        return this.profileService.findAll();
    }
    @Get(':id')
  findOne(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return this.profileService.findOne(id);
  }
    @Post()
    @UseGuards(ProfileGuard)
    create(@Body() createProfile: CreateProfileDto){
        return this.profileService.createProfile(createProfile);
    }
   
  @Put(':id')
  @UseGuards(ProfileGuard)
  update(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
    @Body() updateProfile: UpdateProfileDto,
  ) {
    return this.profileService.updateProfile(id, updateProfile);
  }

  @Delete(':id')
  @UseGuards(ProfileGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    this.profileService.removeProfile(id);
  }
}

