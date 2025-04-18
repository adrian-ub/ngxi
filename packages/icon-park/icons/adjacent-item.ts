import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkAdjacentItemIcon],svg[icon-park-adjacent-item-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" d="M14 29H42V41H14V35V29Z"></svg:path><svg:path fill="#2F88FF" d="M14 7H42V19H14V13V7Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M14 13V19H42V7H14V13ZM14 13H6V35H14M14 35V41H42V29H14V35Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M14 13H6V35H14"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M14 29H42V41H14V35V29Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M14 7H42V19H14V13V7Z"></svg:path></svg:g>`,
})
export class IconParkAdjacentItemIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
