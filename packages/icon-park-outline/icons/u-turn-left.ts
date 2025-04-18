import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineUTurnLeftIcon],svg[icon-park-outline-u-turn-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M14 13h19c6.075 0 11 4.925 11 11v0c0 6.075-4.925 11-11 11H4"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m9 40l-5-5l5-5"></svg:path><svg:circle cx="9" cy="13" r="5"></svg:circle></svg:g>`,
})
export class IconParkOutlineUTurnLeftIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
