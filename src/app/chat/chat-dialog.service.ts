import { Injectable } from '@angular/core';

import { GlobalsService } from '../service/globals.service';


import { ApiAiClient } from 'api-ai-javascript';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

// Message class for displaying messages in the component
export class Message {
  constructor(public content: string, public sentBy: string) {}
}

@Injectable()
export class ChatDialogService {

  token;
  client;

  conversation = new BehaviorSubject<Message[]>([]);

  constructor(
    public globals:GlobalsService
  ) {
    console.log(globals)
    this.token = globals.angularBot;
    this.client = new ApiAiClient({ accessToken: this.token });
  }


  // Sends and receives messages via DialogFlow
  converse(msg: string) {
    const userMessage = new Message(msg, 'user');
    this.update(userMessage);

    return this.client.textRequest(msg)
               .then(res => {
                  const speech = res.result.fulfillment.speech;
                  const botMessage = new Message(speech, 'bot');
                  this.update(botMessage);
               });
  }



  // Adds message to source
  update(msg: Message) {
    this.conversation.next([msg]);
  }


}
