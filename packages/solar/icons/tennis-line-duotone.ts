import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarTennisLineDuotoneIcon],svg[solar-tennis-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3.34 17c2.761 4.783 8.877 6.421 13.66 3.66a9.96 9.96 0 0 0 4.197-4.731a9.99 9.99 0 0 0-.537-8.93a9.99 9.99 0 0 0-7.464-4.928A9.96 9.96 0 0 0 7 3.339C2.217 6.101.58 12.217 3.34 17Z"></svg:path><svg:path d="M13.196 2.071s-.232 3.599 2.268 7.93s5.733 5.928 5.733 5.928M2.803 8.071s3.233 1.599 5.733 5.93s2.268 7.928 2.268 7.928" opacity=".5"></svg:path></svg:g>`,
})
export class SolarTennisLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
