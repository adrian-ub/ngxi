import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonTriangleSolidIcon],svg[carbon-triangle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.98 29c-.569 0-.978-.477-.98-1c0-.163.039-.33.125-.488l13.02-23.987C15.33 3.18 15.664 3 16 3s.67.181.856.525l13.02 23.987c.085.158.124.325.124.488c-.002.523-.411 1-.98 1z"></svg:path>`,
})
export class CarbonTriangleSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
