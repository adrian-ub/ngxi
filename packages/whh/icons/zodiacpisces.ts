import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhZodiacpiscesIcon],svg[whh-zodiacpisces-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.43 128q-192 47-192 384t192 384q26 0 45 18.5t19 45t-19 45.5t-45 19q-96-16-166.5-80t-106.5-157t-45-211h-260q-9 118-45 211t-106.5 157t-166.5 80q-26 0-45-19t-19-45.5t19-45t45-18.5q192-47 192-384t-192-384q-26 0-45-19t-19-45.5t19-45t45-18.5q96 16 166.5 80t106.5 157t45 211h260q9-118 45-211t106.5-157t166.5-80q26 0 45 18.5t19 45.5t-18.5 45.5t-45.5 18.5"></svg:path>`,
})
export class WhhZodiacpiscesIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
