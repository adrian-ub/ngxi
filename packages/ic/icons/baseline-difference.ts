import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineDifferenceIcon],svg[ic-baseline-difference-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 23H4c-1.1 0-2-.9-2-2V7h2v14h14zM15 1H8c-1.1 0-1.99.9-1.99 2L6 17c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V7zm1.5 14h-6v-2h6zm0-6h-2v2h-2V9h-2V7h2V5h2v2h2z"></svg:path>`,
})
export class IcBaselineDifferenceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
