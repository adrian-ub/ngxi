import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riExpandDiagonalS2LineIcon],svg[ri-expand-diagonal-s-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 8.414V12H5V5h7v2H8.414L17 15.586V12h2v7h-7v-2h3.586z"></svg:path>`,
})
export class RiExpandDiagonalS2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
