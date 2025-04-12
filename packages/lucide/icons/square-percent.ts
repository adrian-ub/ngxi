import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSquarePercentIcon],svg[lucide-square-percent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="18" height="18" x="3" y="3" rx="2"></svg:rect><svg:path d="m15 9l-6 6m0-6h.01M15 15h.01"></svg:path></svg:g>`
})
export class LucideSquarePercentIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
