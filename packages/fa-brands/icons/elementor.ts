import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faBrandsElementorIcon],svg[fa-brands-elementor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M425.6 32H22.4C10 32 0 42 0 54.4v403.2C0 470 10 480 22.4 480h403.2c12.4 0 22.4-10 22.4-22.4V54.4C448 42 438 32 425.6 32M164.3 355.5h-39.8v-199h39.8zm159.3 0H204.1v-39.8h119.5zm0-79.6H204.1v-39.8h119.5zm0-79.7H204.1v-39.8h119.5z"></svg:path>`,
})
export class FaBrandsElementorIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
