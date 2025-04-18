import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[wiDirectionDownLeftIcon],svg[wi-direction-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.83 16.77a.65.65 0 0 0 .66.67h2.87c.19 0 .35-.06.47-.19c.13-.13.19-.29.19-.48a.59.59 0 0 0-.19-.46a.67.67 0 0 0-.47-.18h-1.24L18 12.24c.12-.14.18-.3.18-.5a.65.65 0 0 0-.18-.46c-.12-.12-.29-.18-.5-.18q-.3 0-.48.18l-3.86 3.87V13.9a.65.65 0 0 0-.67-.67c-.19 0-.35.07-.47.2c-.13.13-.19.29-.19.48z"></svg:path>`,
})
export class WiDirectionDownLeftIcon {
  readonly viewBox = input("0 0 30 30")
  readonly width = input("1em")
  readonly height = input("1em")
}
