import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkIntermediateModeIcon],svg[icon-park-intermediate-mode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24.0033 4L29.2737 9.27038H38.7296V18.7263L44 23.9967L38.7296 29.2737V38.7296H29.2737L24.0033 44L18.7264 38.7296H9.27036V29.2737L4 23.9967L9.27036 18.7263V9.27038H18.7264L24.0033 4Z"></svg:path><svg:path stroke="#fff" d="M24 16C27.9932 16.5 31 20 31 24C31 28 28 31.5 24 31.9549"></svg:path></svg:g>`,
})
export class IconParkIntermediateModeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
