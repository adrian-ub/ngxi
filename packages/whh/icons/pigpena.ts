import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhPigpenaIcon],svg[whh-pigpena-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M928 1024H96q-40 0-68-28T0 928t28-68t68-28h736V96q0-40 28-68t68-28t68 28t28 68v832q0 40-28 68t-68 28"></svg:path>`,
})
export class WhhPigpenaIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
