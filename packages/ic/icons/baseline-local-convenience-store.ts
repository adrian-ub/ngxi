import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineLocalConvenienceStoreIcon],svg[ic-baseline-local-convenience-store-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 7V4H5v3H2v13h8v-4h4v4h8V7zm-8 3H9v1h2v1H8V9h2V8H8V7h3zm5 2h-1v-2h-2V7h1v2h1V7h1z"></svg:path>`,
})
export class IcBaselineLocalConvenienceStoreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
