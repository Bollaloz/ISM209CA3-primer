import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLinkedIdentityDto } from './dto/create-linked-identity.dto';
import { UpdateLinkedIdentityDto } from './dto/update-linked-identity.dto';
import { LinkedIdentity } from './entities/linked-identity.entity';
@Injectable()
export class LinkedIdentityService {
  constructor(
    @InjectRepository(LinkedIdentity)
    private LinkedIdentityRespository: Repository <LinkedIdentity>
  ){}
  async create(createLinkedIdentityDto: CreateLinkedIdentityDto) {
   // return 'This action adds a new linkedIdentity';
   return this.LinkedIdentityRespository.save(new LinkedIdentity);
  }

  async findAll() {
   // return `This action returns all linkedIdentities`;
   return await this.LinkedIdentityRespository.find();
  }

  async findOne(id: number) {
    //return `This action returns a #${id} linkedIdentity`;
    return await this.LinkedIdentityRespository.findOne();
  }

  async update(id: number, updateLinkedIdentityDto: UpdateLinkedIdentityDto) {
   // return `This action updates a #${id} linkedIdentity`;
   return await this.LinkedIdentityRespository.update(id,new UpdateLinkedIdentityDto);
  }

  async remove(id: number) {
   // return `This action removes a #${id} linkedIdentity`;
   return await this.LinkedIdentityRespository.delete(id);
  }
}