import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkHomeIcon],svg[icon-park-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M9 18V42H39V18L24 6L9 18Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" stroke-linejoin="round" d="M19 29V42H29V29H19Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M9 42H39"></svg:path></svg:g>`,
})
export class IconParkHomeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
