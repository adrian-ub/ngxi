import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsBusinesswomanIcon],svg[flat-color-icons-businesswoman-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#BF360C" d="M16 15h16v18H16z"></svg:path><svg:path fill="#78909C" d="M40 44H8c0-11 11-13 11-13h10s11 2 11 13"></svg:path><svg:path fill="#FF9800" d="M24 37c-2.2 0-5-6-5-6v-6h10v6s-2.8 6-5 6"></svg:path><svg:path fill="#FFB74D" d="M33 14c0-7.6-18-5-18 0v7c0 5 4 9 9 9s9-4 9-9z"></svg:path><svg:path fill="#FF5722" d="M24 4C17.9 4 9 7.4 9 27.3l7 4.7V19l12-7l4 5v15l7-6c0-4-.7-20-11-20l-1-2z"></svg:path><svg:path fill="#FFB74D" d="M24 38c-4.4 0-5-7-5-7s2.5 4 5 4s5-4 5-4s-.6 7-5 7"></svg:path><svg:circle cx="28" cy="21" r="1" fill="#784719"></svg:circle><svg:circle cx="20" cy="21" r="1" fill="#784719"></svg:circle>`,
})
export class FlatColorIconsBusinesswomanIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
