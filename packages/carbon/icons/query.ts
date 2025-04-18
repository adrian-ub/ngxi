import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonQueryIcon],svg[carbon-query-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="11" cy="15.5" r="1.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M12 12h-2V8h2a2 2 0 0 0 0-4h-2a2 2 0 0 0-2 2v.5H6V6a4.005 4.005 0 0 1 4-4h2a4 4 0 0 1 0 8Z"></svg:path><svg:path fill="currentColor" d="M22.448 21.034a10.97 10.97 0 0 0-2.527-16.29l-.999 1.73A8.997 8.997 0 1 1 5 14H3a10.992 10.992 0 0 0 18.034 8.448L28.586 30L30 28.586Z"></svg:path>`,
})
export class CarbonQueryIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
