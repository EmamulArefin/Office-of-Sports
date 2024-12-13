import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Student_Regi } from 'src/User/Student_Entity/student.entity';
import { Sport } from 'src/sports/Sports_Entity/sports.entity';

@Entity('Feedback')
export class Feedback {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  comment: string;

  @Column({ type: 'int', default: 0 })
  rating: number;

  // ManyToOne relationship to Sport
  @ManyToOne(() => Sport, (sport) => sport.feedbacks, { eager: true }) // Link back to Sport
  @JoinColumn({ name: 'sport_id' })
  sport: Sport; // This refers to the Sport associated with the feedback
}
