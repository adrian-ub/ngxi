import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpFilter3Icon],svg[ic-sharp-filter-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 1H5v18h18zm-2 16H7V3h14zM3 5H1v18h18v-2H3zm14 10V5h-6v2h4v2h-2v2h2v2h-4v2z"></svg:path>`,
})
export class IcSharpFilter3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
