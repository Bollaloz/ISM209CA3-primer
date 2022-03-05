import { LinkedIdentity } from "src/citizen-registration/linked-identity/entities/linked-identity.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

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

    @Column()
    dateOfBirth: Date;

    @Column({nullable: true})
    nationality: string;

    @Column({nullable: true})
    countryOfBirth: string;

    @Column({nullable: true})
    stateOfbirth: string;

    @Column({nullable: true})
    townOfbirth: string;

    @Column({nullable: true})
    ResidenceAddress: string;

    @Column({nullable: true})
    Profession: string;

    @OneToOne(type => LinkedIdentity, linkedIdentity => linkedIdentity.biodatum)
    linkedIdentity: LinkedIdentity;
}


