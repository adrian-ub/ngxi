import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiBuilding11Icon],svg[maki-building-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M2 1v9h4V6h2v4h1V1H2zm3 8H3V6h2v3zm0-4H3V3h2v2zm3 0H6V3h2v2z" fill="currentColor"></svg:path>`,
})
export class MakiBuilding11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
