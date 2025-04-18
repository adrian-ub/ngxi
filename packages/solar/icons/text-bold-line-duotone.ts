import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarTextBoldLineDuotoneIcon],svg[solar-text-bold-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M5 4.609A2.61 2.61 0 0 1 7.609 2H12a5 5 0 0 1 0 10H5z"></svg:path><svg:path d="M5 12h9a5 5 0 0 1 0 10H7.059A2.06 2.06 0 0 1 5 19.941z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarTextBoldLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
