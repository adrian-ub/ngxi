import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonPinIcon],svg[carbon-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28.59 13.31L30 11.9L20 2l-1.31 1.42l1.18 1.18l-11.49 9.72l-1.72-1.71L5.25 14l5.66 5.68L2 28.58L3.41 30l8.91-8.91L18 26.75l1.39-1.42l-1.71-1.71l9.72-11.49ZM16.26 22.2L9.8 15.74L21.29 6L26 10.71Z"></svg:path>`,
})
export class CarbonPinIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
