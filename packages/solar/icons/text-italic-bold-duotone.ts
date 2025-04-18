import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarTextItalicBoldDuotoneIcon],svg[solar-text-italic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 1h12a1 1 0 1 1 0 2H9a1 1 0 0 1 0-2m-.744 20H3a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m13.656 3l-5.4 18h2.088l5.4-18z" opacity=".5"></svg:path>`,
})
export class SolarTextItalicBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
