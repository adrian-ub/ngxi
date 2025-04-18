import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkListNumbersIcon],svg[icon-park-list-numbers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M20 9H42"></svg:path><svg:path d="M20 19H42"></svg:path><svg:path d="M20 29H42"></svg:path><svg:path d="M20 39H42"></svg:path><svg:path d="M6 29H12V32L6 38V39H12"></svg:path><svg:path d="M7 11L9 9V19M9 19H7M9 19H11"></svg:path></svg:g>`,
})
export class IconParkListNumbersIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
