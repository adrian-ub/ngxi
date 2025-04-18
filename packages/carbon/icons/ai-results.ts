import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonAiResultsIcon],svg[carbon-ai-results-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M16 8a5.99 5.99 0 0 0 9.471 4.885L28.586 16L30 14.586l-3.115-3.115A5.997 5.997 0 1 0 16 8zm2 0a4 4 0 1 1 4 4a4.005 4.005 0 0 1-4-4z" fill="currentColor"></svg:path><svg:path d="M11 24h10v2H11z" fill="currentColor"></svg:path><svg:path d="M13 28h6v2h-6z" fill="currentColor"></svg:path><svg:path d="M10.815 18.14A7.185 7.185 0 0 1 8 12a8.005 8.005 0 0 1 6-7.737L13.614 2.3A10.009 10.009 0 0 0 6 12a9.18 9.18 0 0 0 3.46 7.616C10.472 20.551 11 21.081 11 22h2c0-1.84-1.11-2.866-2.185-3.86z" fill="currentColor"></svg:path><svg:path d="M23.05 16a9.6 9.6 0 0 1-1.872 2.143C20.107 19.135 19 20.16 19 22h2c0-.92.526-1.45 1.535-2.386a10.966 10.966 0 0 0 2.369-2.833z" fill="currentColor"></svg:path>`,
})
export class CarbonAiResultsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
