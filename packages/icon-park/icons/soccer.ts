import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSoccerIcon],svg[icon-park-soccer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4"><svg:path d="M17.8172 4.97973C7.30905 8.38921 1.57007 19.6775 4.97947 30.1758C8.38886 40.6742 19.6769 46.4233 30.175 43.0139C40.6831 39.6044 46.4221 28.3161 43.0127 17.8178C39.6033 7.30937 28.3153 1.57026 17.8172 4.97973Z"></svg:path><svg:path fill="#2F88FF" d="M34 21L24 13L14 21L18 33H30L34 21Z"></svg:path><svg:path d="M34 21L43 18"></svg:path><svg:path d="M36 40L30 33"></svg:path><svg:path d="M18 33L12 40"></svg:path><svg:path d="M14 21L5 18"></svg:path><svg:path d="M24 13V4"></svg:path></svg:g>`,
})
export class IconParkSoccerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
