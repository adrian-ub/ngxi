import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsIAmSoberIcon],svg[arcticons-i-am-sober-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m27.36 13.347l5.166 5.166h0L24 27.038h0l-8.525-8.525h0l5.165-5.166a4.75 4.75 0 0 1 6.72 0m4.256 21.305l-5.166-5.165h0l8.525-8.525h0l8.526 8.525h0l-5.166 5.165a4.75 4.75 0 0 1-6.72 0m-21.95 0L4.5 29.487h0l8.525-8.526h0l8.525 8.526h0l-5.165 5.165a4.75 4.75 0 0 1-6.72 0"></svg:path>`,
})
export class ArcticonsIAmSoberIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
