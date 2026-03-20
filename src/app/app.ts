import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button, Box, HStack, VStack } from "../components";
import { KeyValuePipe } from "@angular/common";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Button, Box, HStack, VStack, KeyValuePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-test-project');
  protected debug(...args: any[]): void {
    console.log(...args);
  }
}
