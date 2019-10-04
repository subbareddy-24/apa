import { Component, OnInit } from '@angular/core';
import { MessagingService } from '../../services/messaging.service';

@Component({
  selector: 'cgi-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.scss']
})
export class ChatboxComponent implements OnInit {

  expanded = false;
  connecting = false;
  isOpened: boolean;
  messages = [];
  totalOnline = 0;
  user = 1;

  constructor(private messagingService: MessagingService) { }

  ngOnInit() {
    this.isOpened = false;
  }


  sendMessage(message) {
    if (message) {
      const nd = new Date;
      const data = {
        message,
        userId: this.user,
        time: nd.getHours() + ':' + nd.getMinutes()
      };

      const respData = {
        message,
        userId: 2,
        time: nd.getHours() + ':' + nd.getMinutes()
      };

      this.messages = [...this.messages, data, respData];
    }
  }

  connect(message: string) {
    if (message) {
      const nd = new Date;
      const userMsg = {
        message,
        userId: this.user,
        time: nd.getHours() + ':' + nd.getMinutes()
      };
      this.connecting = true;
      this.messages.push(userMsg);

      this.messagingService.connect(message).subscribe(
        data => {
          const botMsg = {
            message: data,
            userId: 2,
            time: nd.getHours() + ':' + nd.getMinutes()
          };
          this.messages.push(botMsg);
          this.connecting = false;
        },
        error => {
          console.log(error);
          const botMsg = {
            message: error.error.text,
            userId: 2,
            time: nd.getHours() + ':' + nd.getMinutes()
          };
          this.messages.push(botMsg);
          this.connecting = false;
        }
      );
    }
  }

}
