import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsScreenshotAssistantIcon],svg[arcticons-screenshot-assistant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="24" height="39" x="11.999" y="4.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3" ry="3"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.09 10.538h18v27h-18z"></svg:path><svg:circle cx="24" cy="23.994" r="6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24.907 25.565l.907-1.571l-.907-1.57h-1.814l-.907 1.57l.907 1.571zm.907-1.571l2.442 4.23m-8.512-8.459l2.442 4.229m3.349-5.8l-2.442 4.229m1.814 3.142l-2.442 4.23m.628-4.23h-4.885m6.699-3.142h4.885"></svg:path>`,
})
export class ArcticonsScreenshotAssistantIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
