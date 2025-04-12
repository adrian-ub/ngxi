import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMessageCircleOffIcon],svg[lucide-message-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.5 14.9A9 9 0 0 0 9.1 3.5M2 2l20 20M5.6 5.6C3 8.3 2.2 12.5 4 16l-2 6l6-2c3.4 1.8 7.6 1.1 10.3-1.7"></svg:path>`
})
export class LucideMessageCircleOffIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
