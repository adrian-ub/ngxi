import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBlockOneIcon],svg[icon-park-block-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 30H18V42H6V30Z"></svg:path><svg:path d="M30 6H42V18H30V6Z"></svg:path><svg:path d="M30 18H42V30H30V18Z"></svg:path><svg:path d="M18 18H30V30H18V18Z"></svg:path><svg:path d="M6 18H18V30H6V18Z"></svg:path></svg:g>`,
})
export class IconParkBlockOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
