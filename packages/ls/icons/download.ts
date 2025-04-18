import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsDownloadIcon],svg[ls-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M586 271H457V60c0-18-15-33-33-33H295c-19 0-34 15-34 33v211H132c-17 0-23 11-10 24l214 213c6 6 14 9 23 9s18-3 24-9l213-213c12-13 8-24-10-24M0 422v228c0 10 5 16 16 16h684c11 0 17-6 17-16V422c0-10-8-17-17-17h-65c-9 0-17 8-17 17v145H98V422c0-10-7-17-16-17H16c-9 0-16 8-16 17"></svg:path>`,
})
export class LsDownloadIcon {
  readonly viewBox = input("0 0 717 666")
  readonly width = input("1.08em")
  readonly height = input("1em")
}
