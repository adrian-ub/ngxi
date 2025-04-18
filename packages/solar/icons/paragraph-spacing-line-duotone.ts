import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarParagraphSpacingLineDuotoneIcon],svg[solar-paragraph-spacing-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M4 21h16M4 3h16" opacity=".5"></svg:path><svg:path d="m12 5.5l3 3m-3-3l-3 3m3-3v13m0 0l3-3m-3 3l-3-3"></svg:path></svg:g>`,
})
export class SolarParagraphSpacingLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
