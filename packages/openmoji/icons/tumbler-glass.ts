import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiTumblerGlassIcon],svg[openmoji-tumbler-glass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M36.8 37h21.6"></svg:path><svg:path fill="#F4AA41" d="m12.9 36l3.6 31h39l3.6-31z"></svg:path><svg:path fill="#E27022" d="m45.1 36l-3.6 31h14l3.6-31z"></svg:path><svg:path fill="#FFF" d="m37.104 60.814l2.088-13.135l13.432 2.135l-2.088 13.135zM17.231 38.372L31.057 34l3.83 12.11l-13.827 4.37z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"><svg:path stroke-width="2" d="m60 28l-4.5 39h-39L12 28"></svg:path><svg:path stroke-width="1.792" d="m37.104 60.814l2.088-13.135l13.432 2.135l-2.088 13.135z"></svg:path><svg:path stroke-width="1.808" d="M17.231 38.372L31.057 34l3.83 12.11l-13.827 4.37z"></svg:path></svg:g>`,
})
export class OpenmojiTumblerGlassIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
