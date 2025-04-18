import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSoapBubbleIcon],svg[icon-park-soap-bubble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:ellipse cx="22" cy="30" fill="#2F88FF" stroke="#000" stroke-linejoin="round" rx="16" ry="14"></svg:ellipse><svg:path stroke="#fff" d="M26 24C27.3333 24.1667 30 25 31 29"></svg:path><svg:circle cx="8" cy="8" r="4" fill="#2F88FF" stroke="#000" stroke-linejoin="round"></svg:circle><svg:circle cx="41" cy="13" r="3" fill="#2F88FF" stroke="#000" stroke-linejoin="round"></svg:circle></svg:g>`,
})
export class IconParkSoapBubbleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
