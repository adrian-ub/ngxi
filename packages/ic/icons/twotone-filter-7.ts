import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneFilter7Icon],svg[ic-twotone-filter-7-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 17h14V3H7zm4-10V5h6v2l-4 8h-2l4-8z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M3 23h16v-2H3V5H1v16c0 1.1.9 2 2 2m10-8l4-8V5h-6v2h4l-4 8zm8-14H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2m0 16H7V3h14z"></svg:path>`,
})
export class IcTwotoneFilter7Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
