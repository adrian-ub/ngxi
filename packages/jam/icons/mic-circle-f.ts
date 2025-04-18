import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamMicCircleFIcon],svg[jam-mic-circle-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m0-16.395a3 3 0 0 0-3 3v4a3 3 0 1 0 6 0v-4a3 3 0 0 0-3-3m-6 7v.022a6 6 0 1 0 12 0v-.022a1 1 0 0 0-2 0v.022a4 4 0 1 1-8 0v-.022a1 1 0 0 0-2 0m6-5a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1"></svg:path>`,
})
export class JamMicCircleFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
