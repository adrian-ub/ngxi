import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideVibrateIcon],svg[lucide-vibrate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m2 8l2 2l-2 2l2 2l-2 2m20-8l-2 2l2 2l-2 2l2 2"></svg:path><svg:rect width="8" height="14" x="8" y="5" rx="1"></svg:rect></svg:g>`
})
export class LucideVibrateIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
