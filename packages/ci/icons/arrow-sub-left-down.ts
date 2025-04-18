import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciArrowSubLeftDownIcon],svg[ci-arrow-sub-left-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m13.5 12.5l-5 5m0 0l-5-5m5 5V9.7c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874c.428-.218.988-.218 2.108-.218h9.8"></svg:path>`,
})
export class CiArrowSubLeftDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
