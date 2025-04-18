import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBulletMapIcon],svg[icon-park-bullet-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M6 6V42H42"></svg:path><svg:path d="M16 40V9C16 7.89543 17.0534 7 18.3529 7H33.6471C34.9466 7 36 7.89543 36 9V40"></svg:path><svg:path d="M17 32.1084H34"></svg:path><svg:path d="M22 19H30"></svg:path><svg:path d="M26 14V32.1082"></svg:path></svg:g>`,
})
export class IconParkBulletMapIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
