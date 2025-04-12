import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideClock1Icon],svg[lucide-clock-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M12 6v6l2.5-4"></svg:path></svg:g>`
})
export class LucideClock1Icon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
