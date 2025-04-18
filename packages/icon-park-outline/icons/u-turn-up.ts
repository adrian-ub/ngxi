import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineUTurnUpIcon],svg[icon-park-outline-u-turn-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M13 14v19c0 6.075 4.925 11 11 11v0c6.075 0 11-4.925 11-11V4"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m30 9l5-5l5 5"></svg:path><svg:circle cx="13" cy="9" r="5" transform="rotate(-90 13 9)"></svg:circle></svg:g>`,
})
export class IconParkOutlineUTurnUpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
