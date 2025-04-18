import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiSortIcon],svg[openmoji-sort-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FFF" d="M16 33h31v6H16zm0-12h39.986v6H16zm0 24h26v6H16z"></svg:path><svg:path fill="#D0CFCE" d="M16 24h40v3H16zm0 12h31v3H16zm.333 12h26v3h-26z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M16 21h40v6H16zm0 12h31v6H16zm.333 12h26v6h-26z"></svg:path>`,
})
export class OpenmojiSortIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
