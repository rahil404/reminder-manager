import { Component, OnInit } from '@angular/core';
import { Reminder } from '../../Reminder';
import { REMINDERS } from '../../default-reminders';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { ReminderService } from '../../services/reminder.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.css']
})
export class RemindersComponent implements OnInit {
  reminders: Reminder[] = [];
  faPlusSquare = faPlusSquare;
  subscription: Subscription;

  constructor(private reminderService: ReminderService) {
    this.subscription = this.reminderService
      .onGet()
      .subscribe((value) => (this.reminders = value));

   }

  ngOnInit(): void {
    this.reminderService.get();
  }

  toggleCompleted(reminder: Reminder) {
    reminder.completed = !reminder.completed;
    this.reminderService.updateReminderCompleted(reminder);
  }

  deleteReminder(reminder: Reminder) {
    this.reminderService.deleteReminder(reminder);
  }

}
