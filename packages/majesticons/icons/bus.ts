import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsBusIcon],svg[majesticons-bus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 19a2 2 0 0 1-2-2v-4m2 6v1.5a.5.5 0 0 0 .5.5v0a.5.5 0 0 0 .5-.5V19m-1 0h1m11 0a2 2 0 0 0 2-2v-4m-2 6v1.5a.5.5 0 0 1-.5.5v0a.5.5 0 0 1-.5-.5V19m1 0h-1M4 13V7m0 6h8m8 0V7m0 6h-8m-5 6h10M4 7V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2M4 7h8m8 0h-8m0 0v6"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M4 13h16v6H4zm3 3a1 1 0 0 1 1-1h.001a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1m9-1a1 1 0 1 0 0 2h.001a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M4 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2H4z"></svg:path></svg:g>`,
})
export class MajesticonsBusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
