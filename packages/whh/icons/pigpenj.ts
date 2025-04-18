import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhPigpenjIcon],svg[whh-pigpenj-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M928 1024H96q-40 0-68-28T0 928t28-68t68-28h736V96q0-40 28-68t68-28t68 28t28 68v832q0 40-28 68t-68 28M512 640q-53 0-90.5-37.5T384 512t37.5-90.5T512 384t90.5 37.5T640 512t-37.5 90.5T512 640"></svg:path>`,
})
export class WhhPigpenjIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
