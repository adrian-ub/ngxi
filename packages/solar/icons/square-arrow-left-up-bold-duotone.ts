import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarSquareArrowLeftUpBoldDuotoneIcon],svg[solar-square-arrow-left-up-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.464 3.464C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536" opacity=".5"></svg:path><svg:path fill="currentColor" d="M8.421 9.172a.75.75 0 0 1 .75-.75h4.243a.75.75 0 1 1 0 1.5h-2.432l4.377 4.376a.75.75 0 0 1-1.061 1.061L9.92 10.983v2.432a.75.75 0 0 1-1.5 0z"></svg:path>`,
})
export class SolarSquareArrowLeftUpBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
