import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumStreamOnIcon],svg[circum-stream-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.26 19.089a9.625 9.625 0 0 1-.026-14.178C6.709 4.475 6 3.769 5.527 4.2a10.516 10.516 0 0 0 .026 15.6c.475.433 1.184-.273.707-.707Z"></svg:path><svg:path fill="currentColor" d="M8.84 15.706a5.024 5.024 0 0 1-.014-7.412c.474-.437-.234-1.143-.707-.707a6.03 6.03 0 0 0 .014 8.826c.474.434 1.183-.272.707-.707"></svg:path><svg:circle cx="12" cy="12" r="1.244" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M17.74 4.911a9.625 9.625 0 0 1 .026 14.178c-.475.436.234 1.142.707.707A10.516 10.516 0 0 0 18.447 4.2c-.475-.433-1.184.273-.707.707Z"></svg:path><svg:path fill="currentColor" d="M15.16 8.294a5.024 5.024 0 0 1 .014 7.412c-.474.437.234 1.143.707.707a6.03 6.03 0 0 0-.014-8.826c-.474-.434-1.183.272-.707.707"></svg:path>`,
})
export class CircumStreamOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
