import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6BrandsUikitIcon],svg[fa6-brands-uikit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M443.9 128v256L218 512L0 384V169.7l87.6 45.1v117l133.5 75.5l135.8-75.5v-151l-101.1-57.6l87.6-53.1zM308.6 49.1L223.8 0l-88.6 54.8l86 47.3z"></svg:path>`,
})
export class Fa6BrandsUikitIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
