import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMicrowaveIcon],svg[lucide-microwave-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="20" height="15" x="2" y="4" rx="2"></svg:rect><svg:rect width="8" height="7" x="6" y="8" rx="1"></svg:rect><svg:path d="M18 8v7M6 19v2m12-2v2"></svg:path></svg:g>`
})
export class LucideMicrowaveIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
