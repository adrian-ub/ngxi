import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineParachuteIcon],svg[icon-park-outline-parachute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M16.727 24q3.636-3.636 7.273-3.636T31.273 24q4.243-3.636 6.363-3.636q2.122 0 6.364 3.636c0-11.046-8.954-20-20-20S4 12.954 4 24q4.243-3.636 6.364-3.636T16.727 24Z"></svg:path><svg:path stroke-linecap="round" d="m4 24l20 20l-7.273-20m14.546 0L24 44l20-20"></svg:path></svg:g>`,
})
export class IconParkOutlineParachuteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
