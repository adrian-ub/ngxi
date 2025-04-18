import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkDiamondRingIcon],svg[icon-park-diamond-ring-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="25" cy="29" r="15"></svg:circle><svg:path fill="#2F88FF" d="M18 8L21 4H25.1339H29.0536L32 8L25 14L18 8Z"></svg:path></svg:g>`,
})
export class IconParkDiamondRingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
