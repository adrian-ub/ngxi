import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarSquareArrowRightDownBoldDuotoneIcon],svg[solar-square-arrow-right-down-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.536 20.536C19.07 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535" opacity=".5"></svg:path><svg:path fill="currentColor" d="M15.579 14.828a.75.75 0 0 1-.75.75h-4.243a.75.75 0 0 1 0-1.5h2.432L8.642 9.7a.75.75 0 0 1 1.06-1.06l4.377 4.376v-2.432a.75.75 0 0 1 1.5 0z"></svg:path>`,
})
export class SolarSquareArrowRightDownBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
