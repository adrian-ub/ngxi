import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkInlineIcon],svg[icon-park-inline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M37 9L34 6H8L25 24L8 42H34L37 39"></svg:path><svg:path d="M5 24H15"></svg:path><svg:path d="M33 24H43"></svg:path></svg:g>`,
})
export class IconParkInlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
