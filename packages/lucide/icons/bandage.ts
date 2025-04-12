import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBandageIcon],svg[lucide-bandage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10 10.01h.01m-.01 4h.01m3.99-4h.01m-.01 4h.01M18 6v11.5M6 6v12"></svg:path><svg:rect width="20" height="12" x="2" y="6" rx="2"></svg:rect></svg:g>`
})
export class LucideBandageIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
