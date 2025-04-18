import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsAtlasosIcon],svg[simple-icons-atlasos-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 1.608l12 20.785H0l2.537-4.394h13.852L12 10.396l-1.844 3.193H5.082z"></svg:path>`,
})
export class SimpleIconsAtlasosIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
