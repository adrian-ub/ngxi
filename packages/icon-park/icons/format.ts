import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFormatIcon],svg[icon-park-format-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:rect width="32" height="18" x="8" y="24" stroke-linejoin="round"></svg:rect><svg:path fill="#2F88FF" stroke-linejoin="round" d="M4 13H18V6H30V13H44V24H4V13Z"></svg:path><svg:path d="M16 32L16 42"></svg:path></svg:g>`,
})
export class IconParkFormatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
