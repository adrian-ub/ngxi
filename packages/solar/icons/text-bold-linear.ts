import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarTextBoldLinearIcon],svg[solar-text-bold-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="1.5" d="M5 4.609A2.61 2.61 0 0 1 7.609 2H12a5 5 0 0 1 0 10H5zM5 12h9a5 5 0 0 1 0 10H7.059A2.06 2.06 0 0 1 5 19.941z"></svg:path>`,
})
export class SolarTextBoldLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
