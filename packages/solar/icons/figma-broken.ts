import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarFigmaBrokenIcon],svg[solar-figma-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8.667H8.667m3.333 0V2H8.667a3.333 3.333 0 0 0 0 6.667m3.333 0v6.666H8.667M12 8.667h3.333m-6.666 0a3.333 3.333 0 0 0 0 6.666m0 0A3.333 3.333 0 1 0 12 18.667m3.333-10a3.333 3.333 0 1 0 0 6.666a3.333 3.333 0 0 0 0-6.666m0 0a3.333 3.333 0 0 0 0-6.667"></svg:path>`,
})
export class SolarFigmaBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
