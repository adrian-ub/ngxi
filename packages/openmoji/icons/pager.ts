import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiPagerIcon],svg[openmoji-pager-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d0cfce" d="M11 22h50v28H11z"></svg:path><svg:path fill="#9b9b9a" d="M61 50H50.685L36.512 22H61z"></svg:path><svg:path fill="#b1cc33" d="M16 27h33v11.2H16z"></svg:path><svg:path fill="#5c9e31" d="M49 38.2h-7.488L35.843 27H49z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 50V22m50 28H11m50-28v28M11 22h50"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M16 38.2V27m33 11.2H16M49 27v11.2M16 27h33"></svg:path><svg:circle cx="20.638" cy="44.1" r="2"></svg:circle><svg:circle cx="28.638" cy="44.1" r="2"></svg:circle><svg:circle cx="36.638" cy="44.1" r="2"></svg:circle>`,
})
export class OpenmojiPagerIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
