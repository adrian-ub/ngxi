import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwaySymbol1Icon],svg[subway-symbol-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 0C138.2 0 42.7 95.5 42.7 213.3V512h128V213.3c0-47.1 38.2-85.3 85.3-85.3s85.3 38.2 85.3 85.3V512h128V213.3C469.4 95.5 373.8 0 256 0M128 469.3H85.4V384H128zm298.7 0H384V384h42.7z"></svg:path>`,
})
export class SubwaySymbol1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
