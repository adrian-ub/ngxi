import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibUnsplashIcon],svg[cib-unsplash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 9V0h12v9zm12 5h10v18H0V14h10v9h12z"></svg:path>`,
})
export class CibUnsplashIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
