import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBioDatumDto } from './dto/create-bio-datum.dto';
import { UpdateBioDatumDto } from './dto/update-bio-datum.dto';
import { Biodatum } from './entities/biodatum.entity';

@Injectable()
export class BioDataService {
  constructor(
    @InjectRepository(Biodatum)
    private BiodataRepository: Repository<Biodatum>){}

  async create(createBioDatumDto: CreateBioDatumDto) {
    const newBiodata: Biodatum = this.BiodataRepository.create(createBioDatumDto)
    return this.BiodataRepository.save(newBiodata);
    //return 'This action adds a new bioDatum';
  }

  async findAll() {
    //return `This action returns all bioData`;
    return await this.BiodataRepository.find();
  }

  async findOne(id: number) {
    //return `This action returns a #${id} bioDatum`;
    return await this.BiodataRepository.findOne(id);
  }

  async update(id: number, updateBioDatumDto: UpdateBioDatumDto) {
    //return `This action updates a #${id} bioDatum`;
    return await this.BiodataRepository.update(id, updateBioDatumDto);
  }

  async remove(id: number) {
    //return `This action removes a #${id} bioDatum`;
    return await this.BiodataRepository.delete(id);
  }
}


