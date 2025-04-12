import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFrownIcon],svg[lucide-frown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M16 16s-1.5-2-4-2s-4 2-4 2m1-7h.01M15 9h.01"></svg:path></svg:g>`
})
export class LucideFrownIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
