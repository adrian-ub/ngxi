import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarStructureLineDuotoneIcon],svg[solar-structure-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M8 5a3 3 0 1 1-6 0a3 3 0 0 1 6 0Zm14 0a3 3 0 1 1-6 0a3 3 0 0 1 6 0ZM8 19a3 3 0 1 1-6 0a3 3 0 0 1 6 0Zm14 0a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"></svg:path><svg:path stroke-linecap="round" d="M8 19h8M8 5h8m3 11V8M5 16V8" opacity=".5"></svg:path></svg:g>`,
})
export class SolarStructureLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
