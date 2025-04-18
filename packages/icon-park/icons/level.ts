import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkLevelIcon],svg[icon-park-level-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 42L4 18.5L9.69488 6L38.3051 6L44 18.5L24 42Z"></svg:path><svg:path stroke="#fff" d="M32 18L24 27L16 18"></svg:path></svg:g>`,
})
export class IconParkLevelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
