import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenQuoteFill16Icon],svg[garden-quote-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 8H4c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1m6 0h-3c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.5 12C6.5 11 7 9.5 7 8V6m4.5 6c1-1 1.5-2.5 1.5-4V6"></svg:path>`,
})
export class GardenQuoteFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
