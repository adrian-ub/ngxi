import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpFilter2Icon],svg[ic-sharp-filter-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5H1v18h18v-2H3zm20-4H5v18h18zm-2 16H7V3h14zm-4-4h-4v-2h4V5h-6v2h4v2h-4v6h6z"></svg:path>`,
})
export class IcSharpFilter2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
