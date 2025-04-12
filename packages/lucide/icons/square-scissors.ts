import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSquareScissorsIcon],svg[lucide-square-scissors-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="20" height="20" x="2" y="2" rx="2"></svg:rect><svg:circle cx="8" cy="8" r="2"></svg:circle><svg:path d="M9.414 9.414L12 12m2.8 2.8L18 18"></svg:path><svg:circle cx="8" cy="16" r="2"></svg:circle><svg:path d="m18 6l-8.586 8.586"></svg:path></svg:g>`
})
export class LucideSquareScissorsIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
