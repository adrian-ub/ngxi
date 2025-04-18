import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhPigpenkIcon],svg[whh-pigpenk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M928.784 1024h-832q-40 0-68-28t-28-68V96q0-40 28-68t68-28t68 28t28 68v736h640V96q0-40 28-68t68-28t68 28t28 68v832q0 40-28 68t-68 28m-416-384q-53 0-90.5-37.5t-37.5-90.5t37.5-90.5t90.5-37.5t90.5 37.5t37.5 90.5t-37.5 90.5t-90.5 37.5"></svg:path>`,
})
export class WhhPigpenkIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
