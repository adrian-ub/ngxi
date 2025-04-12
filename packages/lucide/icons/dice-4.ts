import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideDice4Icon],svg[lucide-dice-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="18" height="18" x="3" y="3" rx="2" ry="2"></svg:rect><svg:path d="M16 8h.01M8 8h.01M8 16h.01M16 16h.01"></svg:path></svg:g>`
})
export class LucideDice4Icon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
