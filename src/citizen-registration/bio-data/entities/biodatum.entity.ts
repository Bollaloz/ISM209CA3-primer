import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Biodatum {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    middleName: string;

    @Column()
    lastName: string;

    @Column({nullable: true})
    dateOfBirth: Date;

    @Column({nullable: true})
    nationality: string;

    @Column({nullable: true})
    countryOfBirth: string;

    @Column({nullable: true})
    stateOfBirth: string;

    @Column({nullable: true})
    townOfBirth: string;

    @Column({nullable: true})
    resideneAddress: string;

    @Column({nullable: true})
    profession: string;

    @Column({default: true})
    isActive: boolean;
}