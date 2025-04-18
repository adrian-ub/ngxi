import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiCheeseWedgeIcon],svg[openmoji-cheese-wedge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fcea2b" d="M57 11.996c5.523 0 10 4.478 10 10v31a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-31a2 2 0 0 1 2-2l13-2.08z"></svg:path><svg:circle cx="16" cy="43.996" r="5" fill="#f1b31c"></svg:circle><svg:circle cx="56" cy="29.996" r="5" fill="#f1b31c"></svg:circle><svg:circle cx="49" cy="44.996" r="3" fill="#f1b31c"></svg:circle><svg:circle cx="40" cy="31.996" r="3" fill="#f1b31c"></svg:circle><svg:circle cx="32" cy="40.996" r="3" fill="#f1b31c"></svg:circle><svg:circle cx="21" cy="28.996" r="3" fill="#f1b31c"></svg:circle><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="M67 21.996v31a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-31a2 2 0 0 1 2-2l50-8"></svg:path><svg:path d="M57 11.996c5.523 0 10 4.478 10 10"></svg:path><svg:circle cx="16" cy="43.996" r="5"></svg:circle><svg:circle cx="56" cy="29.996" r="5"></svg:circle><svg:circle cx="49" cy="44.996" r="3"></svg:circle><svg:circle cx="40" cy="31.996" r="3"></svg:circle><svg:circle cx="32" cy="40.996" r="3"></svg:circle><svg:circle cx="21" cy="28.996" r="3"></svg:circle></svg:g>`,
})
export class OpenmojiCheeseWedgeIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
