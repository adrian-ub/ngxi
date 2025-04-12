import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSendToBackIcon],svg[lucide-send-to-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="8" height="8" x="14" y="14" rx="2"></svg:rect><svg:rect width="8" height="8" x="2" y="2" rx="2"></svg:rect><svg:path d="M7 14v1a2 2 0 0 0 2 2h1m4-10h1a2 2 0 0 1 2 2v1"></svg:path></svg:g>`
})
export class LucideSendToBackIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
