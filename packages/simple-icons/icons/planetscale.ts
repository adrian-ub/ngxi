import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsPlanetscaleIcon],svg[simple-icons-planetscale-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 12C0 5.373 5.373 0 12 0c4.873 0 9.067 2.904 10.947 7.077l-15.87 15.87a12 12 0 0 1-1.935-1.099L14.99 12H12l-8.485 8.485A11.96 11.96 0 0 1 0 12m12.004 12L24 12.004C23.998 18.628 18.628 23.998 12.004 24"></svg:path>`,
})
export class SimpleIconsPlanetscaleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
