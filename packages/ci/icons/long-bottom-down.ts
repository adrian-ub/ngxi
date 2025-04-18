import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciLongBottomDownIcon],svg[ci-long-bottom-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.021 15.55L7.014 12H5v7h7v-2.014l-3.55-.007L19 6.429L17.571 5L7.021 15.55Z"></svg:path>`,
})
export class CiLongBottomDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
