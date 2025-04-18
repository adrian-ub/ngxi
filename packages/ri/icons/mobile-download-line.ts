import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMobileDownloadLineIcon],svg[ri-mobile-download-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4v16h10v-8h2v9a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h7v2zm12 2h3l-4 4l-4-4h3V2h2zm-6 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path>`,
})
export class RiMobileDownloadLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
