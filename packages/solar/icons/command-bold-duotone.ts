import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarCommandBoldDuotoneIcon],svg[solar-command-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 16h3a3 3 0 1 1-3 3.001zM5 16l3 .001v3a3 3 0 1 1-3-3"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M19 8h-3V5a3 3 0 1 1 3 3M8 8V5a3 3 0 1 0-3 3z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M16 8H8v8h8z" opacity=".5"></svg:path>`,
})
export class SolarCommandBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
