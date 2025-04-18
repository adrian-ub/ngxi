import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhPigpenoIcon],svg[whh-pigpeno-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384.784 512q0-53 37.5-90.5t90.5-37.5t90.5 37.5t37.5 90.5t-37.5 90.5t-90.5 37.5t-90.5-37.5t-37.5-90.5m544-320h-736v640h736q40 0 68 28t28 68t-28 68t-68 28h-832q-40 0-68-28t-28-68V96q0-40 28-68t68-28h832q40 0 68 28t28 68t-28 68t-68 28"></svg:path>`,
})
export class WhhPigpenoIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
