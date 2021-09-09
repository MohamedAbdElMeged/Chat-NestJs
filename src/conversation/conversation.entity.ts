import { User } from "src/user/user.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Conversation {
    @PrimaryGeneratedColumn()
    id: number;
    @ManyToMany(()=> User)
    @JoinTable()
    users: User[];
    @Column("timestamptz",{default: new Date()})
    createdAt: string
}
