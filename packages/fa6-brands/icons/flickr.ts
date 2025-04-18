import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6BrandsFlickrIcon],svg[fa6-brands-flickr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48M144.5 319c-35.1 0-63.5-28.4-63.5-63.5s28.4-63.5 63.5-63.5s63.5 28.4 63.5 63.5s-28.4 63.5-63.5 63.5m159 0c-35.1 0-63.5-28.4-63.5-63.5s28.4-63.5 63.5-63.5s63.5 28.4 63.5 63.5s-28.4 63.5-63.5 63.5"></svg:path>`,
})
export class Fa6BrandsFlickrIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
