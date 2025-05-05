import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconDownloadIcon],svg[picon-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 7v1H1V7m2-3V1h2v3h2L4 7L1 4"></svg:path>`,
})
export class PiconDownloadIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
