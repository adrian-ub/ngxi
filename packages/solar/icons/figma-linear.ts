import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarFigmaLinearIcon],svg[solar-figma-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M12 2H8.667a3.333 3.333 0 1 0 0 6.667H12zm0 6.667H8.667a3.333 3.333 0 0 0 0 6.666H12z"></svg:path><svg:path d="M18.667 12A3.333 3.333 0 1 1 12 12a3.333 3.333 0 0 1 6.667 0Zm-10 3.334H12v3.333a3.333 3.333 0 1 1-3.333-3.334Z"></svg:path><svg:path d="M12 2h3.333a3.333 3.333 0 1 1 0 6.667H12z"></svg:path></svg:g>`,
})
export class SolarFigmaLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
