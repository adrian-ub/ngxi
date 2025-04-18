import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsDownasaurIcon],svg[pixelarticons-downasaur-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4h14v2h2v6h-8v2h6v2h-4v2h-2v2H2V8h2V6h2zm2 6h2V8H8z"></svg:path>`,
})
export class PixelarticonsDownasaurIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
