import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDeckOutlineIcon],svg[material-symbols-light-deck-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 21.5v-13H3.577L12 2.616L20.423 8.5H12.5v13zm.5-14h5.227H6.773zm-8.5 14v-5.173l-.723-3.977l.989-.158l.711 3.924H8.5V21.5h-1v-4.384h-3V21.5zm12 0v-5.384h4.023l.712-3.924l.988.158l-.723 3.977V21.5h-1v-4.384h-3V21.5zm-8.727-14h10.454L12 3.835z"></svg:path>`,
})
export class MaterialSymbolsLightDeckOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
