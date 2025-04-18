import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiIceCreamIcon],svg[maki-ice-cream-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.44 8.17a3.47 3.47 0 0 0 2-.63a3.5 3.5 0 0 0 1.56.6h.44L8 13.7a.5.5 0 0 1-.92 0Zm6-3.473a2 2 0 0 1-4 0a2 2 0 1 1-2-2h.12a2 2 0 1 1 3.75 0h.13A2 2 0 0 1 11.439 4.7Z"></svg:path>`,
})
export class MakiIceCreamIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
