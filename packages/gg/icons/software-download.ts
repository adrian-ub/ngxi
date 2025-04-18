import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggSoftwareDownloadIcon],svg[gg-software-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11 5a1 1 0 1 1 2 0v7.158l3.243-3.243l1.414 1.414L12 15.986L6.343 10.33l1.414-1.414L11 12.158z"></svg:path><svg:path d="M4 14h2v4h12v-4h2v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path></svg:g>`,
})
export class GgSoftwareDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
