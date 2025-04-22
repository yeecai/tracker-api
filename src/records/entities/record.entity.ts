import { Auth } from "src/auth/entities/auth.entity";
import { Plan } from "src/plans/entities/plan.entity";
import { CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Record {
    @PrimaryGeneratedColumn()
    record_id: number;

    @ManyToOne(() => Plan, plan => plan.records)
    @JoinColumn({ name: 'plan_id' })
    plan: Plan;

    @ManyToOne(() => Auth, user => user.records)
    @JoinColumn({ name: 'user_id' })
    user: Auth

    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;
}
