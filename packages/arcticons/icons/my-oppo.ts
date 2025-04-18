import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMyOppoIcon],svg[arcticons-my-oppo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m43.177 16.018l-7.37-7.37H12.193l-7.37 7.37a1.1 1.1 0 0 0-.058 1.496l18.399 21.454a1.1 1.1 0 0 0 1.672 0l18.399-21.454a1.1 1.1 0 0 0-.058-1.496"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.673 20.336L24 27.664l7.327-7.328"></svg:path>`,
})
export class ArcticonsMyOppoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
