import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsNewsIcon],svg[flat-color-icons-news-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FF5722" d="M32 15v28H10c-2.2 0-4-1.8-4-4V15z"></svg:path><svg:path fill="#FFCCBC" d="M14 5v34c0 2.2-1.8 4-4 4h29c2.2 0 4-1.8 4-4V5z"></svg:path><svg:path fill="#FF5722" d="M20 10h18v4H20zm0 7h8v2h-8zm10 0h8v2h-8zm-10 4h8v2h-8zm10 0h8v2h-8zm-10 4h8v2h-8zm10 0h8v2h-8zm-10 4h8v2h-8zm10 0h8v2h-8zm-10 4h8v2h-8zm10 0h8v2h-8zm-10 4h8v2h-8zm10 0h8v2h-8z"></svg:path>`,
})
export class FlatColorIconsNewsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
