import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonCrossReferenceIcon],svg[carbon-cross-reference-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M11 24h4v2h-4z" fill="currentColor"></svg:path><svg:path d="M5 24h4v2H5z" fill="currentColor"></svg:path><svg:path d="M23 24h4v2h-4z" fill="currentColor"></svg:path><svg:path d="M17 24h4v2h-4z" fill="currentColor"></svg:path><svg:path d="M9 22a4.92 4.92 0 0 1 4-2h6a5.22 5.22 0 0 1 4 2h2.3a6.87 6.87 0 0 0-6.3-4h-6a6.87 6.87 0 0 0-6.3 4z" fill="currentColor"></svg:path><svg:path d="M24 28h2v2h-2z" fill="currentColor"></svg:path><svg:path d="M6 28h2v2H6z" fill="currentColor"></svg:path><svg:path d="M16 16a7 7 0 1 1 7-7a7 7 0 0 1-7 7zm0-12a5 5 0 0 0-5 5a5 5 0 0 0 10 0a5 5 0 0 0-5-5z" fill="currentColor"></svg:path>`,
})
export class CarbonCrossReferenceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
