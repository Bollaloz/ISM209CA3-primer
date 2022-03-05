import { CreateBioDatumDto  } from "src/citizen-registration/bio-data/dto/create-bio-datum.dto";

export class CreateLinkedIdentityDto {
    readonly firstName: string;
    readonly middleName?: string;
    readonly lastName: string;
    readonly dateOfBirth: Date;
    readonly nationality: string
    readonly countryOfBirth: string;
    readonly stateOfBirth: string;
    readonly townOfBirth: string;
    readonly ResidenceAddress: string;
    readonly profession: string;
    readonly NIN: number;
    readonly BVN: number;
    readonly MobileNumber: number;
    readonly biodatum: CreateBioDatumDto;
}
