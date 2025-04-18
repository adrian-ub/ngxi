import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSagittariusIcon],svg[icon-park-sagittarius-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M21 7H41V27"></svg:path><svg:path d="M41 7L7 41"></svg:path><svg:path d="M9 21L27 39"></svg:path></svg:g>`,
})
export class IconParkSagittariusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
