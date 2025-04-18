import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkPositiveDynamicsIcon],svg[icon-park-positive-dynamics-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path d="M17 33.9502V42.1102"></svg:path><svg:path d="M9 40V42.0556"></svg:path><svg:path d="M25 27V42.0714"></svg:path><svg:path d="M33 18.9614V42.0878"></svg:path><svg:path d="M41 10.9707V42.0833"></svg:path><svg:path d="M7 33L34 6"></svg:path><svg:path d="M23.5 6H34"></svg:path></svg:g>`,
})
export class IconParkPositiveDynamicsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
