import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarTextUnderlineLineDuotoneIcon],svg[solar-text-underline-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M4 21h16"></svg:path><svg:path d="M4 3v6a8 8 0 1 0 16 0V3" opacity=".5"></svg:path></svg:g>`,
})
export class SolarTextUnderlineLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
