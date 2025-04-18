import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faBrandsVimeoVIcon],svg[fa-brands-vimeo-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M447.8 153.6c-2 43.6-32.4 103.3-91.4 179.1c-60.9 79.2-112.4 118.8-154.6 118.8q-39.15 0-66.3-72.3C100.3 250 85.3 174.3 56.2 174.3c-3.4 0-15.1 7.1-35.2 21.1L0 168.2c51.6-45.3 100.9-95.7 131.8-98.5c34.9-3.4 56.3 20.5 64.4 71.5c28.7 181.5 41.4 208.9 93.6 126.7c18.7-29.6 28.8-52.1 30.2-67.6c4.8-45.9-35.8-42.8-63.3-31c22-72.1 64.1-107.1 126.2-105.1c45.8 1.2 67.5 31.1 64.9 89.4"></svg:path>`,
})
export class FaBrandsVimeoVIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
