import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiLaptopIcon],svg[oi-laptop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.34 1a.5.5 0 0 0-.34.5V5H0v1.5c0 .28.22.5.5.5h7.01c.28 0 .5-.22.5-.5V5h-1V1.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.09 0h-.06zM2 2h4v3H5v1H3V5H2z"></svg:path>`,
})
export class OiLaptopIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
