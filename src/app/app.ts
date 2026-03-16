import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button } from "../components";
import { KeyValuePipe, NgClass } from "@angular/common";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Button, NgClass, KeyValuePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-test-project');
}
