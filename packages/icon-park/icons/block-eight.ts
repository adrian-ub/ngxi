import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBlockEightIcon],svg[icon-park-block-eight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 6H18V18H6V6Z"></svg:path><svg:path d="M18 6H30V18H18V6Z"></svg:path><svg:path d="M18 18H30V30H18V18Z"></svg:path><svg:path d="M18 30H30V42H18V30Z"></svg:path><svg:path d="M30 6H42V18H30V6Z"></svg:path></svg:g>`,
})
export class IconParkBlockEightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
