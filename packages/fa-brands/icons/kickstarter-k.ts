import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faBrandsKickstarterKIcon],svg[fa-brands-kickstarter-k-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M147.3 114.4c0-56.2-32.5-82.4-73.4-82.4C26.2 32 0 68.2 0 113.4v283c0 47.3 25.3 83.4 74.9 83.4c39.8 0 72.4-25.6 72.4-83.4v-76.5l112.1 138.3c22.7 27.2 72.1 30.7 103.2 0c27-27.6 27.3-67.4 7.4-92.2l-90.8-114.8l74.9-107.4c17.4-24.7 17.5-63.1-10.4-89.8c-30.3-29-82.4-31.6-113.6 12.8L147.3 185z"></svg:path>`,
})
export class FaBrandsKickstarterKIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
