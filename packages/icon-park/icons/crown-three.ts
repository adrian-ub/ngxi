import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCrownThreeIcon],svg[icon-park-crown-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M13 42H35L41 21L31 26L24 12L17 26L7 21L13 42Z"></svg:path><svg:circle cx="7" cy="18" r="3"></svg:circle><svg:circle cx="24" cy="9" r="3"></svg:circle><svg:circle cx="41" cy="18" r="3"></svg:circle></svg:g>`,
})
export class IconParkCrownThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
