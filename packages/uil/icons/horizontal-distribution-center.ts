import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilHorizontalDistributionCenterIcon],svg[uil-horizontal-distribution-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 5h-1V3a1 1 0 0 0-2 0v2h-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h1v2a1 1 0 0 0 2 0v-2h1a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1m-1 12h-2V7h2ZM11 4H9V3a1 1 0 0 0-2 0v1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h2v1a1 1 0 0 0 2 0v-1h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1m-1 14H6V6h4Z"></svg:path>`,
})
export class UilHorizontalDistributionCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
