import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarMagniferZoomOutBoldDuotoneIcon],svg[solar-magnifer-zoom-out-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.157 20.313a9.157 9.157 0 1 0 0-18.313a9.157 9.157 0 0 0 0 18.313" opacity=".5"></svg:path><svg:path fill="currentColor" d="M17.1 18.122a9 9 0 0 0 1.022-1.022l3.666 3.666a.723.723 0 0 1-1.022 1.022z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M8.023 11.157c0-.4.324-.723.723-.723h4.82a.723.723 0 1 1 0 1.445h-4.82a.723.723 0 0 1-.723-.723" clip-rule="evenodd"></svg:path>`,
})
export class SolarMagniferZoomOutBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
