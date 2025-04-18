import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riDownloadFillIcon],svg[ri-download-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19h18v2H3zM13 9h7l-8 8l-8-8h7V1h2z"></svg:path>`,
})
export class RiDownloadFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
