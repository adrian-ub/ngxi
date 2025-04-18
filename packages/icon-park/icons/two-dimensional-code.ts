import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwoDimensionalCodeIcon],svg[icon-park-two-dimensional-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path fill="#2F88FF" stroke-linejoin="round" d="M20 6H6V20H20V6Z"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M20 28H6V42H20V28Z"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M42 6H28V20H42V6Z"></svg:path><svg:path stroke-linecap="round" d="M29 28V42"></svg:path><svg:path stroke-linecap="round" d="M41 28V42"></svg:path></svg:g>`,
})
export class IconParkTwoDimensionalCodeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
