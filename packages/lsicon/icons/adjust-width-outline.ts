import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconAdjustWidthOutlineIcon],svg[lsicon-adjust-width-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M1.5 3v10m13-10v10M7 8H3m0 0l2-2M3 8l2 2m8-2H9m4 0l-2 2m2-2l-2-2"></svg:path>`,
})
export class LsiconAdjustWidthOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
