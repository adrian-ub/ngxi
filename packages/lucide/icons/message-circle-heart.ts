import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMessageCircleHeartIcon],svg[lucide-message-circle-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></svg:path><svg:path d="M15.8 9.2a2.5 2.5 0 0 0-3.5 0l-.3.4l-.35-.3a2.42 2.42 0 1 0-3.2 3.6l3.6 3.5l3.6-3.5c1.2-1.2 1.1-2.7.2-3.7"></svg:path></svg:g>`
})
export class LucideMessageCircleHeartIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
