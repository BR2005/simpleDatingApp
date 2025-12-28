import { Controller,Get,Query ,Param,Post, Body,Put,Delete,HttpCode,HttpStatus} from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import {UpdateProfileDto } from './dto/update-profil.dto';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {
    constructor(private profileService: ProfileService) {}

    @Get()
    findAll()
    {
        return this.profileService.findAll();
    }
    @Get(':id')
    findOne(@Param('id')id:string){
        return {id};
    }
    @Post()
    create(@Body() createProfile: CreateProfileDto){
        return {
            name: createProfile.name,
            description: createProfile.description
        }
    }
    @Put(':id')
    update(@Param('id') id: string, @Body() updateProfile: UpdateProfileDto) {
        return {
            id,
            ...updateProfile
        };
    }
     // DELETE /profiles/:id
  @Delete(':id')
  /* 
  Challenge:
    1. Change HttpStatus.OK to use the proper property on HttpStatus that serves back a status code of 204 back to the client
  */
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {}
}
