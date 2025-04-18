import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageInboxDownloadIcon],svg[mage-inbox-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M2.75 12H6a2 2 0 0 1 2 2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2a2 2 0 0 1 2-2h3.25"></svg:path><svg:path d="M21.25 10.375v4.875a6 6 0 0 1-6 6h-6.5a6 6 0 0 1-6-6v-6.5a6 6 0 0 1 6-6h4.875"></svg:path><svg:path stroke-miterlimit="10" d="M18.957 7.75v-5"></svg:path><svg:path stroke-linejoin="round" d="m16.664 5.645l1.967 1.967a.46.46 0 0 0 .652 0l1.967-1.967"></svg:path></svg:g>`,
})
export class MageInboxDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
