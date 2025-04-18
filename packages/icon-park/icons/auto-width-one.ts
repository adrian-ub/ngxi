import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkAutoWidthOneIcon],svg[icon-park-auto-width-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path d="M6 7H42"></svg:path><svg:path d="M8 24H40"></svg:path><svg:path stroke-linejoin="round" d="M13.9907 30L8 24.0046L14 18"></svg:path><svg:path stroke-linejoin="round" d="M34.0093 18L40 23.9954L34 30"></svg:path><svg:path d="M6 41H42"></svg:path></svg:g>`,
})
export class IconParkAutoWidthOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
