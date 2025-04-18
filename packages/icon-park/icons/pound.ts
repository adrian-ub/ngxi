import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkPoundIcon],svg[icon-park-pound-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 16H42"></svg:path><svg:path d="M16 6L16 42"></svg:path><svg:path d="M32 6V42"></svg:path><svg:path d="M6 32H42"></svg:path></svg:g>`,
})
export class IconParkPoundIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
