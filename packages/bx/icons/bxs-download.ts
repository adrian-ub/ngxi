import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxsDownloadIcon],svg[bx-bxs-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M19 9h-4V3H9v6H5l7 8zM4 19h16v2H4z" fill="currentColor"></svg:path>`,
})
export class BxBxsDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
