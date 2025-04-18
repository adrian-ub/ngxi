import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilHorizontalDistributionLeftIcon],svg[uil-horizontal-distribution-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 4H6V3a1 1 0 0 0-2 0v18a1 1 0 0 0 2 0v-1h5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1m-1 14H6V6h4Zm9-13h-3V3a1 1 0 0 0-2 0v18a1 1 0 0 0 2 0v-2h3a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1m-1 12h-2V7h2Z"></svg:path>`,
})
export class UilHorizontalDistributionLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
