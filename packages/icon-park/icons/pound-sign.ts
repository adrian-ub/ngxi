import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkPoundSignIcon],svg[icon-park-pound-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path d="M36 17L12 17"></svg:path><svg:path d="M36 31L12 31"></svg:path><svg:path d="M17 36L17 12"></svg:path><svg:path d="M31 36L31 12"></svg:path></svg:g>`,
})
export class IconParkPoundSignIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
