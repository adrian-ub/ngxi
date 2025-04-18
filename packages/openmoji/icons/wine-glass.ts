import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiWineGlassIcon],svg[openmoji-wine-glass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ea5a47" d="M55 26H17V14h38z"></svg:path><svg:path fill="#ea5a47" d="M56 24c0 11.046-8.954 20-20 20s-20-8.954-20-20"></svg:path><svg:path fill="#d22f27" d="M55 24V14h-7.57c.597 6.335.293 21.204-13.788 29.849c.775.091 1.559.151 2.358.151c11.046 0 20-8.954 20-20z"></svg:path><svg:g fill="none" stroke="#000"><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 67h32M36 44v23m20-43c0 3.265-.782 6.347-2.17 9.07C50.524 39.557 43.78 44 36 44c-11.046 0-20-8.954-20-20m0-19v19M56 5v19"></svg:path><svg:path stroke-miterlimit="10" stroke-width="1.974" d="M16.539 14.5H55.5"></svg:path></svg:g>`,
})
export class OpenmojiWineGlassIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
