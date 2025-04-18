import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarAlignVerticalSpacingLineDuotoneIcon],svg[solar-align-vertical-spacing-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 3H2m20 18H2" opacity=".5"></svg:path><svg:path d="M20 12c0-1.886 0-2.828-.586-3.414S17.886 8 16 8H8c-1.886 0-2.828 0-3.414.586S4 10.114 4 12s0 2.828.586 3.414S6.114 16 8 16h8c1.886 0 2.828 0 3.414-.586S20 13.886 20 12Z"></svg:path></svg:g>`,
})
export class SolarAlignVerticalSpacingLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
