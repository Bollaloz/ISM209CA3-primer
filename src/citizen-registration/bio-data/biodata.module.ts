import { Module } from '@nestjs/common';
import { BioDataService } from './biodata.service';
import { BioDataController } from './biodata.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Biodatum } from './entities/biodatum.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Biodatum])],
  controllers: [BioDataController],
  providers: [BioDataService]
})
export class BioDataModule {}
