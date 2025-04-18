import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarCardTransferLineDuotoneIcon],svg[solar-card-transfer-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M22 11c-.01-3.114-.108-4.765-1.172-5.828C19.657 4 17.771 4 14 4h-4C6.229 4 4.343 4 3.172 5.172S2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h1.5"></svg:path><svg:path stroke-linejoin="round" d="M20 20v-6m0 0l2 2m-2-2l-2 2" opacity=".5"></svg:path><svg:path stroke-linejoin="round" d="M15.5 14v6m0 0l2-2m-2 2l-2-2"></svg:path><svg:path d="M10 16H6" opacity=".5"></svg:path><svg:path d="M2 10h20" opacity=".4"></svg:path></svg:g>`,
})
export class SolarCardTransferLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
