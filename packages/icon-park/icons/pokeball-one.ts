import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkPokeballOneIcon],svg[icon-park-pokeball-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linejoin="round" stroke-width="4" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:circle cx="24" cy="24" r="6" fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M30 24H44"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 24H18"></svg:path><svg:circle cx="24" cy="24" r="2" fill="#fff"></svg:circle></svg:g>`,
})
export class IconParkPokeballOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
