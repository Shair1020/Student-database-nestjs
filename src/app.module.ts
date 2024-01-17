import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MongooseModule } from "@nestjs/mongoose";
import { MONGO_URI } from "./config";
import { StudentSchema } from "./schema/student.schema";
import { StudentService } from './student/student.service';
import { StudentController } from './student/student.controller';

@Module({
  imports: [MongooseModule.forRoot(MONGO_URI), MongooseModule.forFeature([{ name: "Student", schema: StudentSchema }])],
  controllers: [AppController, StudentController],
  providers: [AppService, StudentService],
})
export class AppModule {}

