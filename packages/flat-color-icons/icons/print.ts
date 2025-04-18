import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsPrintIcon],svg[flat-color-icons-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#424242" d="M9 11h30v3H9z"></svg:path><svg:path fill="#616161" d="M4 25h40v-7c0-2.2-1.8-4-4-4H8c-2.2 0-4 1.8-4 4z"></svg:path><svg:path fill="#424242" d="M8 36h32c2.2 0 4-1.8 4-4v-8H4v8c0 2.2 1.8 4 4 4"></svg:path><svg:circle cx="40" cy="18" r="1" fill="#00E676"></svg:circle><svg:path fill="#90CAF9" d="M11 4h26v10H11z"></svg:path><svg:path fill="#242424" d="M37.5 31h-27c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h27c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5"></svg:path><svg:path fill="#90CAF9" d="M11 31h26v11H11z"></svg:path><svg:path fill="#42A5F5" d="M11 29h26v2H11z"></svg:path><svg:path fill="#1976D2" d="M16 33h17v2H16zm0 4h13v2H16z"></svg:path>`,
})
export class FlatColorIconsPrintIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
