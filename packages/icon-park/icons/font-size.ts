import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFontSizeIcon],svg[icon-park-font-size-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M8 10.9333L8 6H40V10.9333"></svg:path><svg:path d="M24 6V42"></svg:path><svg:path d="M16 42H32"></svg:path></svg:g>`,
})
export class IconParkFontSizeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
