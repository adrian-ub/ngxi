import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCodeLaptopIcon],svg[icon-park-code-laptop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M22 9H11C9.34315 9 8 10.3431 8 12V33H40V22"></svg:path><svg:path fill="#2F88FF" d="M4 33H44V35C44 38.3137 41.3137 41 38 41H10C6.68629 41 4 38.3137 4 35V33Z"></svg:path><svg:path stroke-linecap="round" d="M33 7L29 11L33 15"></svg:path><svg:path stroke-linecap="round" d="M39 7L43 11L39 15"></svg:path></svg:g>`,
})
export class IconParkCodeLaptopIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
