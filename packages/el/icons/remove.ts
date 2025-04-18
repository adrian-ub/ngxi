import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elRemoveIcon],svg[el-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 264.84L335.16 600L0 935.16L264.84 1200L600 864.84L935.16 1200L1200 935.16L864.84 600L1200 264.84L935.16 0L600 335.16L264.84 0z"></svg:path>`,
})
export class ElRemoveIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
