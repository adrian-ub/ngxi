import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundShieldMoonIcon],svg[ic-round-shield-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.3 2.26l-6 2.25C4.52 4.81 4 5.55 4 6.39v4.7c0 4.83 3.13 9.37 7.43 10.75c.37.12.77.12 1.14 0c4.3-1.38 7.43-5.91 7.43-10.75v-4.7a2 2 0 0 0-1.3-1.87l-6-2.25c-.45-.18-.95-.18-1.4-.01m4.67 12.15c-1.84 2.17-5.21 2.1-6.96-.07c-2.19-2.72-.65-6.72 2.69-7.33c.34-.06.63.27.51.6c-.46 1.23-.39 2.64.32 3.86a4.51 4.51 0 0 0 3.18 2.2c.34.05.49.47.26.74"></svg:path>`,
})
export class IcRoundShieldMoonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
