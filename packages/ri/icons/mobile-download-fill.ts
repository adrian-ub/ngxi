import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMobileDownloadFillIcon],svg[ri-mobile-download-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6c0-1.537.578-2.938 1.528-4H6a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-9.083Q18.511 12 18 12a6 6 0 0 1-6-6m0 11a1 1 0 1 1 0 2a1 1 0 0 1 0-2M22 6h-3V2h-2v4h-3l4 4z"></svg:path>`,
})
export class RiMobileDownloadFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
