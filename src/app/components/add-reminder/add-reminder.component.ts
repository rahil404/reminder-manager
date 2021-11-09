import { Component, OnInit } from '@angular/core';
import { ReminderService } from '../../services/reminder.service';

@Component({
  selector: 'app-add-reminder',
  templateUrl: './add-reminder.component.html',
  styleUrls: ['./add-reminder.component.css']
})
export class AddReminderComponent implements OnInit {
  title: string;
  day: string;

  constructor(private reminderService: ReminderService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.title) {
      alert('Please enter a title');
      return;
    }

    if (!this.day) {
      alert('Please enter a day');
      return;
    }

    const newReminder = {
      title: this.title,
      day: this.day,
      completed: false
    }

    this.reminderService.addReminder(newReminder);

    alert('Reminder added');

    this.title = '';
    this.day = '';
  }

}
