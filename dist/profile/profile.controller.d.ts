import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profil.dto';
import { ProfileService } from './profile.service';
export declare class ProfileController {
    private profileService;
    constructor(profileService: ProfileService);
    findAll(): {
        id: `${string}-${string}-${string}-${string}-${string}`;
        name: string;
        description: string;
    }[];
    findOne(id: string): {
        id: string;
    };
    create(createProfile: CreateProfileDto): {
        name: string;
        description: string;
    };
    update(id: string, updateProfile: UpdateProfileDto): {
        name: string;
        description: string;
        id: string;
    };
    remove(id: string): void;
}
