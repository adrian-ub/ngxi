import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiMarkerIcon],svg[maki-marker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 1C5.423 1 3 2.288 3 5.568C3 7.793 6.462 12.712 7.5 14c.923-1.288 4.5-6.09 4.5-8.432C12 2.288 9.577 1 7.5 1"></svg:path>`,
})
export class MakiMarkerIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
