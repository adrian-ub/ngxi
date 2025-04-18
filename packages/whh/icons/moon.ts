import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhMoonIcon],svg[whh-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M515 1024q-127 0-239.5-59.5T90 802T0 576q57 86 153 139t202 53q113 0 208.5-55.5T714 561t55-209q0-106-53.5-200.5T576 0q123 17 225.5 89T964 273t60 239q0 104-40.5 199T875 874.5t-162.5 109T515 1024"></svg:path>`,
})
export class WhhMoonIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
