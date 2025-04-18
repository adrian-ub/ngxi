import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenQuoteFill12Icon],svg[garden-quote-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 7H8c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1M5 7H3c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 9.5c.5-.5 1-1.5 1-3V5M4 9.5c.5-.5 1-1.5 1-3V5"></svg:path>`,
})
export class GardenQuoteFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
