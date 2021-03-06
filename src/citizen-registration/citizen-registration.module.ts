import { Module } from '@nestjs/common';
import { BioDataModule } from './bio-data/biodata.module';
import { LinkedIdentityModule } from './linked-identity/linked-identity.module';

@Module({
  imports: [BioDataModule, LinkedIdentityModule]
})
export class CitizenRegistrationModule {}
