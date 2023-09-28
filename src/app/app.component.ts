import { Component } from '@angular/core';
import { FirebaseService } from './services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angularfire-template';

  constructor(private db:FirebaseService){
    this.sampleTest();
  }

  // Use this function to verify whether your Firebase connection is correctly configured.
  async sampleTest(){
    console.log(await this.db.getDocuments("Your_Collection_Name"));
  }
}
