import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarMagniferZoomOutBoldIcon],svg[solar-magnifer-zoom-out-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21.788 21.788a.723.723 0 0 0 0-1.022L18.122 17.1a9.157 9.157 0 1 0-1.022 1.022l3.666 3.666a.723.723 0 0 0 1.022 0M8.024 11.157c0-.4.324-.723.723-.723h4.82a.723.723 0 0 1 0 1.446h-4.82a.723.723 0 0 1-.723-.723" clip-rule="evenodd"></svg:path>`,
})
export class SolarMagniferZoomOutBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
