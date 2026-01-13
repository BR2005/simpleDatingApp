import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profil.dto';

@Injectable()
export class ProfileService {
  private profiles = [
    {
      id: randomUUID(),
      name: 'Brianna Watts',
      description:
        `Looking for someone to merge with my heart. I’m a full-stack romantic who refactors my feelings until they pass all tests.`,
    },
    {
      id: randomUUID(),
      name: 'Jasper Quinn',
      description:
        `Seeking a partner in crime to compile my heart. Must be comfortable with the terminal.`,
    },
    {
      id: randomUUID(),
      name: 'Leo Park',
      description:
        `You think you know VIM? Try Neovim. I'll make your modal dreams come true.`,
    },
  ];

  findAll() {
    return this.profiles;
  }

  findOne(id: string) {
    const profile = this.profiles.find(p => p.id === id);
    if (!profile) {
      throw new NotFoundException(`Profile with id ${id} not found`);
    }
    return profile;
  }

  createProfile(dto: CreateProfileDto) {
    const newProfile = {
      id: randomUUID(),
      ...dto,
    };

    this.profiles.push(newProfile);
    return newProfile;
  }

  updateProfile(id: string, dto: UpdateProfileDto) {
    const profile = this.findOne(id);
    Object.assign(profile, dto);
    return profile;
  }

  removeProfile(id: string) {
    const index = this.profiles.findIndex(p => p.id === id);
    if (index === -1) {
      throw new NotFoundException(`Profile with id ${id} not found`);
    }
    this.profiles.splice(index, 1);
  }
}
