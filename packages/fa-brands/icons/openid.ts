import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faBrandsOpenidIcon],svg[fa-brands-openid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m271.5 432l-68 32C88.5 453.7 0 392.5 0 318.2c0-71.5 82.5-131 191.7-144.3v43c-71.5 12.5-124 53-124 101.3c0 51 58.5 93.3 135.7 103v-340l68-33.2v384zM448 291l-131.3-28.5l36.8-20.7c-19.5-11.5-43.5-20-70-24.8v-43c46.2 5.5 87.7 19.5 120.3 39.3l35-19.8z"></svg:path>`,
})
export class FaBrandsOpenidIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
