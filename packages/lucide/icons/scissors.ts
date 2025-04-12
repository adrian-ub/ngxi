import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideScissorsIcon],svg[lucide-scissors-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="6" cy="6" r="3"></svg:circle><svg:path d="M8.12 8.12L12 12m8-8L8.12 15.88"></svg:path><svg:circle cx="6" cy="18" r="3"></svg:circle><svg:path d="M14.8 14.8L20 20"></svg:path></svg:g>`
})
export class LucideScissorsIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
