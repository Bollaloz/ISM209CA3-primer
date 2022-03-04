import { Column, Entity, PrimaryGeneratedColumn} from "typeorm"
@Entity()
export class LinkedIdentity{
    @PrimaryGeneratedColumn()
    NIN: number;

    @Column()
    BVN: number;

    @Column()
    MobileNumber: number;
}
