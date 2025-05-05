import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconProtectIcon],svg[picon-protect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 1l1 1v3l1 1V4l1 1v3H2L0 6m8-5v5L6 8H5V5l1-1v2l1-1V2M2 2l2-2l2 2l-2 2"></svg:path>`,
})
export class PiconProtectIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
