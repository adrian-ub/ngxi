import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCodeOneIcon],svg[icon-park-code-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M9 7L23 21L9 35"></svg:path><svg:path d="M17 41L39 41"></svg:path></svg:g>`,
})
export class IconParkCodeOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
