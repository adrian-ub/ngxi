import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhTuneinaltIcon],svg[whh-tuneinalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 960H128q-53 0-90.5-37.5T0 832V128q0-53 37.5-90.5T128 0h704q53 0 90.5 37.5T960 128v704q0 53-37.5 90.5T832 960M480 128q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28m96 352q0-40-29-68t-71-28H128v96q0 40 29 68t71 28h348zm0 160H384v192h96q40 0 68-28t28-68zm256-256h-96q-40 0-68 28t-28 68v96h96q40 0 68-28t28-68z"></svg:path>`,
})
export class WhhTuneinaltIcon {
  readonly viewBox = input("0 0 960 960")
  readonly width = input("1em")
  readonly height = input("1em")
}
