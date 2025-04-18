import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riGradienterLineIcon],svg[ri-gradienter-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.05 13h2.012a8.001 8.001 0 0 0 15.876 0h2.013c-.502 5.053-4.766 9-9.951 9s-9.449-3.947-9.95-9m0-2c.5-5.053 4.764-9 9.95-9s9.449 3.947 9.95 9h-2.012a8.001 8.001 0 0 0-15.876 0zM12 14a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class RiGradienterLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
