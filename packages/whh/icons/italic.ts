import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhItalicIcon],svg[whh-italic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M576 128h-78L275 896h45q26 0 45 18.5t19 45t-19 45.5t-45 19H64q-27 0-45.5-19T0 959.5t18.5-45T64 896h80l223-768h-47q-27 0-45.5-18.5t-18.5-45T274.5 19T320 0h256q26 0 45 19t19 45.5t-19 45t-45 18.5"></svg:path>`,
})
export class WhhItalicIcon {
  readonly viewBox = input("0 0 640 1024")
  readonly width = input("0.63em")
  readonly height = input("1em")
}
