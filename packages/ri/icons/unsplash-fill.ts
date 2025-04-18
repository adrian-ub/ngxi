import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riUnsplashFillIcon],svg[ri-unsplash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.501 11v5h7v-5h5.5v10h-18V11zm7-8v5h-7V3z"></svg:path>`,
})
export class RiUnsplashFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
