import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkDisabledLaptopIcon],svg[icon-park-disabled-laptop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M23 8.99902H11C9.34315 8.99902 8 10.3422 8 11.999V32.999H40V25.999"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M4 32.999H44V34.999C44 38.3127 41.3137 40.999 38 40.999H10C6.68629 40.999 4 38.3127 4 34.999V32.999Z"></svg:path><svg:circle cx="36" cy="13" r="6"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M32 9L40 17"></svg:path></svg:g>`,
})
export class IconParkDisabledLaptopIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
