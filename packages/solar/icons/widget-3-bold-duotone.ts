import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarWidget3BoldDuotoneIcon],svg[solar-widget-3-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M22.25 6.5a4.75 4.75 0 1 0-9.5 0a4.75 4.75 0 0 0 9.5 0m-11 11a4.75 4.75 0 1 0-9.5 0a4.75 4.75 0 0 0 9.5 0"></svg:path><svg:path d="M1.75 6.5a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0m11 11a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0" opacity=".5"></svg:path></svg:g>`,
})
export class SolarWidget3BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
