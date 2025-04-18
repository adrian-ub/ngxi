import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciArrowDownRightMdIcon],svg[ci-arrow-down-right-md-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 7l10 10m0 0V9m0 8H9"></svg:path>`,
})
export class CiArrowDownRightMdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
