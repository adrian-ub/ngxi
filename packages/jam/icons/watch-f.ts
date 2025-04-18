import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamWatchFIcon],svg[jam-watch-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 10V7a1 1 0 1 0-2 0v4a1 1 0 0 0 1 1h3a1 1 0 0 0 0-2zm3-5.93A7.96 7.96 0 0 0 6 3c-1.457 0-2.823.39-4 1.07V3a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3zm0 13.86V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-1.07A7.96 7.96 0 0 0 6 19c1.457 0 2.823-.39 4-1.07M6 17A6 6 0 1 1 6 5a6 6 0 0 1 0 12"></svg:path>`,
})
export class JamWatchFIcon {
  readonly viewBox = input("-6 -1 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
