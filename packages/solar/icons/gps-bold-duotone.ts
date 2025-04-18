import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarGpsBoldDuotoneIcon],svg[solar-gps-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 12a8 8 0 1 1-16 0a8 8 0 0 1 16 0" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12 8.512a3.488 3.488 0 1 0 0 6.976a3.488 3.488 0 0 0 0-6.976M12.75 2a.75.75 0 0 0-1.5 0v2.035a8 8 0 0 1 1.5 0zm7.215 10.75a8 8 0 0 0 0-1.5H22a.75.75 0 0 1 0 1.5zm-8.715 7.215a8 8 0 0 0 1.5 0V22a.75.75 0 0 1-1.5 0zM4.035 11.25a8 8 0 0 0 0 1.5H2a.75.75 0 0 1 0-1.5z"></svg:path>`,
})
export class SolarGpsBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
