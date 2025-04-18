import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkArithmeticButtonsIcon],svg[icon-park-arithmetic-buttons-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M41 4H7C5.34315 4 4 5.34315 4 7V41C4 42.6569 5.34315 44 7 44H41C42.6569 44 44 42.6569 44 41V7C44 5.34315 42.6569 4 41 4Z"></svg:path><svg:path stroke="#fff" stroke-linejoin="round" d="M10 14H18"></svg:path><svg:path stroke="#fff" stroke-linejoin="round" d="M10 14H18"></svg:path><svg:path stroke="#fff" stroke-linejoin="round" d="M11 37L17 31"></svg:path><svg:path stroke="#fff" stroke-linejoin="round" d="M14 18V10"></svg:path><svg:path stroke="#fff" stroke-linejoin="round" d="M17 37L11 31"></svg:path><svg:path stroke="#fff" stroke-linejoin="round" d="M30 14H38"></svg:path><svg:path stroke="#fff" stroke-linejoin="round" d="M30 31H38"></svg:path><svg:path stroke="#fff" stroke-linejoin="round" d="M30 37H38"></svg:path><svg:path stroke="#fff" d="M24 4V44"></svg:path><svg:path stroke="#fff" d="M4 24H44"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M30 4H18"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M30 44H18"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M4 28V20"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M44 28V20"></svg:path></svg:g>`,
})
export class IconParkArithmeticButtonsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
