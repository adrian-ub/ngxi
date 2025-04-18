import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneFilter5Icon],svg[ic-twotone-filter-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 17h14V3H7zm4-4h4v-2h-4V5h6v2h-4v2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M19 23v-2H3V5H1v16c0 1.1.9 2 2 2zm-2-10v-2a2 2 0 0 0-2-2h-2V7h4V5h-6v6h4v2h-4v2h4a2 2 0 0 0 2-2m4-12H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2m0 16H7V3h14z"></svg:path>`,
})
export class IcTwotoneFilter5Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
