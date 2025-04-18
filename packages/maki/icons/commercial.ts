import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiCommercialIcon],svg[maki-commercial-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 6H1a11.4 11.4 0 0 1 1-4h11a11.4 11.4 0 0 1 1 4M3 7h9v6h-1V8H8v5H3zm1 3h3V8H4z"></svg:path>`,
})
export class MakiCommercialIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
