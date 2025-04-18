import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCoinLineIcon],svg[ri-coin-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.005 4.003c6.075 0 11 2.686 11 6v4c0 3.314-4.925 6-11 6c-5.967 0-10.824-2.591-10.995-5.823l-.005-.177v-4c0-3.314 4.925-6 11-6m0 12c-3.72 0-7.01-1.008-9-2.55v.55c0 1.882 3.883 4 9 4c5.01 0 8.838-2.03 8.995-3.882l.005-.118l.001-.55c-1.99 1.542-5.28 2.55-9.001 2.55m0-10c-5.117 0-9 2.118-9 4s3.883 4 9 4s9-2.118 9-4s-3.883-4-9-4"></svg:path>`,
})
export class RiCoinLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
