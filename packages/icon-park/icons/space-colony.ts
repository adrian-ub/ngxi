import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSpaceColonyIcon],svg[icon-park-space-colony-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linejoin="round" d="M42 43V6C42 4.89543 41.1046 4 40 4H33C31.8954 4 31 4.89543 31 6V24"></svg:path><svg:path d="M24 22C14.0589 22 6 30.0589 6 40V44H42V40C42 30.0589 33.9411 22 24 22Z"></svg:path><svg:path stroke-linecap="round" d="M8 31V8"></svg:path><svg:path stroke-linecap="round" d="M16 24L16 14"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M31 14L42 14"></svg:path><svg:path d="M17 42C17 41 17 40.0237 17 39C17 29.6112 20.134 22 24 22C27.866 22 31 29.6112 31 39C31 40.3778 31 41 31 42"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 44H44"></svg:path><svg:path d="M7 35C7 35 17.3496 34 24 34C30.6504 34 41 35 41 35"></svg:path></svg:g>`,
})
export class IconParkSpaceColonyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
