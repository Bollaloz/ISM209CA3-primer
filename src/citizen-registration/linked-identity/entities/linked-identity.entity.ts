import { Biodatum } from "src/citizen-registration/bio-data/entities/biodatum.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from "typeorm"
@Entity()
export class LinkedIdentity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: true})
    NIN: number;

    @Column()
    BVN: number;

    @Column()
    MobileNumber: number;

    @JoinColumn()
    @OneToOne(type => Biodatum, biodatum => biodatum.linkedIdentity, {cascade:true} )
    biodatum: Biodatum;
}
