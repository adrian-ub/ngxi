import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhMediarepeatIcon],svg[whh-mediarepeat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 831H320v169q-37 39-62 12L15 805Q0 789 0 767t15-38l243-207q25-27 62 13v168h512q26 0 45-18.5t19-45.5V511q0-26 18.5-45t45-19t45.5 19t19 45v192q0 53-37.5 90.5T896 831M766 501q-25 27-62-13V319H192q-27 0-45.5 19T128 383v128q0 27-19 45.5T63.5 575t-45-18.5T0 511V319q0-53 37.5-90.5T128 191h576V23q37-39 62-12l243 207q15 16 15 38t-15 38z"></svg:path>`,
})
export class WhhMediarepeatIcon {
  readonly viewBox = input("0 0 1024 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
