import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkRowingIcon],svg[icon-park-rowing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-miterlimit="2" stroke-width="4"><svg:path fill="#2F88FF" d="M30.0195 16C32.781 16 35.0195 13.7614 35.0195 11C35.0195 8.23858 32.781 6 30.0195 6C27.2581 6 25.0195 8.23858 25.0195 11C25.0195 13.7614 27.2581 16 30.0195 16Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M42 31L35 44"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M32.01 40L26 29L9 40L21 20L44 25"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 40H44"></svg:path></svg:g>`,
})
export class IconParkRowingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
