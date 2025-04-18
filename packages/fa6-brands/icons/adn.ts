import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6BrandsAdnIcon],svg[fa6-brands-adn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m248 167.5l64.9 98.8H183.1zM496 256c0 136.9-111.1 248-248 248S0 392.9 0 256S111.1 8 248 8s248 111.1 248 248m-99.8 82.7L248 115.5L99.8 338.7h30.4l33.6-51.7h168.6l33.6 51.7z"></svg:path>`,
})
export class Fa6BrandsAdnIcon {
  readonly viewBox = input("0 0 496 512")
  readonly width = input("0.97em")
  readonly height = input("1em")
}
