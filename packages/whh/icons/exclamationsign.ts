import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhExclamationsignIcon],svg[whh-exclamationsign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024m0-192q27 0 45.5-18.5t18.5-45t-19-45.5t-45-19t-45 19t-19 45.5t18.5 45T512 832m0-640q-53 0-90.5 37.5T384 320l64 256q0 27 19 45.5t45 18.5t45-18.5t19-45.5l64-256q0-53-37.5-90.5T512 192"></svg:path>`,
})
export class WhhExclamationsignIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
