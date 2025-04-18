import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenQuoteStroke16Icon],svg[garden-quote-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M7 7.5H4c-.3 0-.5-.2-.5-.5V4c0-.3.2-.5.5-.5h3c.3 0 .5.2.5.5v3c0 .3-.2.5-.5.5zm6 0h-3c-.3 0-.5-.2-.5-.5V4c0-.3.2-.5.5-.5h3c.3 0 .5.2.5.5v3c0 .3-.2.5-.5.5zM12 12c1-1 1.5-2.5 1.5-4V6M6 12c1-1 1.5-2.5 1.5-4V6"></svg:path>`,
})
export class GardenQuoteStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
