import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhCirclefourIcon],svg[whh-circlefour-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024m192-736q0-13-9.5-22.5T672 256t-22.5 9.5T640 288v160q0 27-18.5 45.5T576 512H448q-26 0-45-18.5T384 448V288q0-13-9.5-22.5T352 256t-22.5 9.5T320 288v160q0 53 37.5 90.5T448 576h128q34 0 64-17v177q0 13 9.5 22.5T672 768t22.5-9.5T704 736z"></svg:path>`,
})
export class WhhCirclefourIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
