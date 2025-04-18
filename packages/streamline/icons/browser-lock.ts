import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBrowserLockIcon],svg[streamline-browser-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round"><svg:path d="M4.75 10.5v-2a.5.5 0 0 1 .5-.5h3.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-3.5a.5.5 0 0 1-.5-.5Z"></svg:path><svg:path stroke-linecap="round" d="M5.5 8V7A1.5 1.5 0 0 1 7 5.5v0A1.5 1.5 0 0 1 8.5 7v1m-8-4.506h13"></svg:path><svg:path stroke-linecap="round" d="M12.5.5h-11a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1"></svg:path></svg:g>`,
})
export class StreamlineBrowserLockIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
