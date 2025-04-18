import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamMicCircleIcon],svg[jam-mic-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0-14.395a3 3 0 0 1 3 3v4a3 3 0 1 1-6 0v-4a3 3 0 0 1 3-3m0 2a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0v-4a1 1 0 0 0-1-1m-6 5a1 1 0 0 1 2 0v.022a4 4 0 1 0 8 0v-.022a1 1 0 0 1 2 0v.022a6 6 0 1 1-12 0z"></svg:path>`,
})
export class JamMicCircleIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
