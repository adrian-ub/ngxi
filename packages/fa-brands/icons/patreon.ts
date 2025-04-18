import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faBrandsPatreonIcon],svg[fa-brands-patreon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 194.8c0 101.3-82.4 183.8-183.8 183.8c-101.7 0-184.4-82.4-184.4-183.8c0-101.6 82.7-184.3 184.4-184.3C429.6 10.5 512 93.2 512 194.8M0 501.5h90v-491H0z"></svg:path>`,
})
export class FaBrandsPatreonIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
