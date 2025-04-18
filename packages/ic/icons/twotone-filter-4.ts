import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneFilter4Icon],svg[ic-twotone-filter-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H7v14h14zm-4 12h-2v-4h-4V5h2v4h2V5h2z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M3 23h16v-2H3V5H1v16c0 1.1.9 2 2 2m4-4h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2M7 3h14v14H7zm8 6h-2V5h-2v6h4v4h2V5h-2z"></svg:path>`,
})
export class IcTwotoneFilter4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
