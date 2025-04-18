import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpFilterNoneIcon],svg[ic-sharp-filter-none-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5H1v18h18v-2H3zm20-4H5v18h18zm-2 16H7V3h14z"></svg:path>`,
})
export class IcSharpFilterNoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
