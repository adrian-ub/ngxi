import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faBrandsUnsplashIcon],svg[fa-brands-unsplash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 230.17V480H0V230.17h141.13v124.92h165.74V230.17ZM306.87 32H141.13v124.91h165.74Z"></svg:path>`,
})
export class FaBrandsUnsplashIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
