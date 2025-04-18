import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsJumpTimeDuotoneIcon],svg[lets-icons-jump-time-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" d="m17.33 6.342l-5.106 10.21a.25.25 0 0 1-.448 0L6.671 6.343a.5.5 0 0 1 .67-.671l4.212 2.105a1 1 0 0 0 .894 0l4.211-2.105a.5.5 0 0 1 .671.67"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" d="M14.5 17.5h4m-13 0h4"></svg:path></svg:g>`,
})
export class LetsIconsJumpTimeDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
