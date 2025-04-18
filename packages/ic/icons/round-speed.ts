import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundSpeedIcon],svg[ic-round-speed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.46 10a1 1 0 0 0-.07 1a7.6 7.6 0 0 1 .52 1.81a8 8 0 0 1-.69 4.73a1 1 0 0 1-.89.53H5.68a1 1 0 0 1-.89-.54A8 8 0 0 1 13 6.06a7.7 7.7 0 0 1 2.11.56a1 1 0 0 0 1-.07a1 1 0 0 0-.17-1.76A10 10 0 0 0 3.35 19a2 2 0 0 0 1.72 1h13.85a2 2 0 0 0 1.74-1a10 10 0 0 0 .55-8.89a1 1 0 0 0-1.75-.11"></svg:path><svg:path fill="currentColor" d="M10.59 12.59a2 2 0 0 0 2.83 2.83l5.66-8.49z"></svg:path>`,
})
export class IcRoundSpeedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
