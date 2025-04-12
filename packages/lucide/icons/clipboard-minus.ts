import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideClipboardMinusIcon],svg[lucide-clipboard-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="8" height="4" x="8" y="2" rx="1" ry="1"></svg:rect><svg:path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2m1 10h6"></svg:path></svg:g>`
})
export class LucideClipboardMinusIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
