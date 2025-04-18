import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkLedDiodeIcon],svg[icon-park-led-diode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M6 24C6 22.8954 6.89543 22 8 22H40C41.1046 22 42 22.8954 42 24V30H6V24Z"></svg:path><svg:path stroke="#000" d="M19 30V44"></svg:path><svg:path stroke="#000" d="M29 30V44"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M24 4C16.268 4 10 10.268 10 18V22H38V18C38 10.268 31.732 4 24 4Z"></svg:path><svg:circle cx="24" cy="13" r="3" fill="#43CCF8" stroke="#fff"></svg:circle></svg:g>`,
})
export class IconParkLedDiodeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
