import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarParagraphSpacingLinearIcon],svg[solar-paragraph-spacing-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 21h16M4 3h16m-8 2.5l3 3m-3-3l-3 3m3-3v13m0 0l3-3m-3 3l-3-3"></svg:path>`,
})
export class SolarParagraphSpacingLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
