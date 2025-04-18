import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6BrandsRenrenIcon],svg[fa6-brands-renren-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M214 169.1c0 110.4-61 205.4-147.6 247.4C30 373.2 8 317.7 8 256.6C8 133.9 97.1 32.2 214 12.5zM255 504c-42.9 0-83.3-11-118.5-30.4C193.7 437.5 239.9 382.9 255 319c15.5 63.9 61.7 118.5 118.8 154.7C338.7 493 298.3 504 255 504m190.6-87.5C359 374.5 298 279.6 298 169.1V12.5c116.9 19.7 206 121.4 206 244.1c0 61.1-22 116.6-58.4 159.9"></svg:path>`,
})
export class Fa6BrandsRenrenIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
