"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileService = void 0;
const common_1 = require("@nestjs/common");
const crypto_1 = require("crypto");
let ProfileService = class ProfileService {
    profiles = [
        {
            id: (0, crypto_1.randomUUID)(),
            name: 'Brianna Watts',
            description: `Looking for someone to merge with my heart. I’m a full-stack romantic who refactors my feelings until they pass all tests.`,
        },
        {
            id: (0, crypto_1.randomUUID)(),
            name: 'Jasper Quinn',
            description: `Seeking a partner in crime to compile my heart. Must be comfortable with the terminal.`,
        },
        {
            id: (0, crypto_1.randomUUID)(),
            name: 'Leo Park',
            description: `You think you know VIM? Try Neovim. I'll make your modal dreams come true.`,
        },
    ];
    findAll() {
        return this.profiles;
    }
    findOne(id) {
        const profile = this.profiles.find(p => p.id === id);
        if (!profile) {
            throw new common_1.NotFoundException(`Profile with id ${id} not found`);
        }
        return profile;
    }
    createProfile(dto) {
        const newProfile = {
            id: (0, crypto_1.randomUUID)(),
            ...dto,
        };
        this.profiles.push(newProfile);
        return newProfile;
    }
    updateProfile(id, dto) {
        const profile = this.findOne(id);
        Object.assign(profile, dto);
        return profile;
    }
    removeProfile(id) {
        const index = this.profiles.findIndex(p => p.id === id);
        if (index === -1) {
            throw new common_1.NotFoundException(`Profile with id ${id} not found`);
        }
        this.profiles.splice(index, 1);
    }
};
exports.ProfileService = ProfileService;
exports.ProfileService = ProfileService = __decorate([
    (0, common_1.Injectable)()
], ProfileService);
//# sourceMappingURL=profile.service.js.map