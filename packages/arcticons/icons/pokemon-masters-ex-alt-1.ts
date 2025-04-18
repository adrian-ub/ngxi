import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPokemonMastersExAlt1Icon],svg[arcticons-pokemon-masters-ex-alt-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M11.402 21.402h12.044c.062.623.093 1.97.093 2.597h0c0 .555-.024 1.827-.075 2.377"></svg:path><svg:path d="M11.402 26.376h12.062c-.215 1.36-.773 3.387-1.28 4.595L3.5 30.97l3.055-3.713V17.03h15.633c.477 1.145 1.032 3.093 1.258 4.373"></svg:path><svg:path d="M22.676 17.029h6.795l4.117 4.324l4.117-4.324H44.5L37.502 24l6.998 6.971h-6.795l-4.117-4.324l-4.117 4.324h-6.795L29.674 24z"></svg:path></svg:g>`,
})
export class ArcticonsPokemonMastersExAlt1Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
