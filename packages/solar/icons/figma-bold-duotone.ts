import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarFigmaBoldDuotoneIcon],svg[solar-figma-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.667 2H8.333a3.333 3.333 0 1 0 0 6.667h3.334z" opacity=".6"></svg:path><svg:path fill="currentColor" d="M11.667 8.667H8.333a3.333 3.333 0 0 0 0 6.666h3.334z" opacity=".4"></svg:path><svg:path fill="currentColor" d="M18.333 12a3.333 3.333 0 1 1-6.667 0a3.333 3.333 0 0 1 6.667 0"></svg:path><svg:path fill="currentColor" d="M8.333 15.334h3.334v3.333a3.333 3.333 0 1 1-3.334-3.334" opacity=".2"></svg:path><svg:path fill="currentColor" d="M11.666 2h3.333a3.333 3.333 0 1 1 0 6.667h-3.333z" opacity=".8"></svg:path>`,
})
export class SolarFigmaBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
