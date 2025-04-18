import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMyNeomaBsIcon],svg[arcticons-my-neoma-bs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.856 7.49c7.39 7.831 8.247 22.796.03 33.049c19.591-3.406 19.39-28.317-.03-33.048m-9.891-.03C-.34 12.864-.34 35.748 19.084 40.421h0c-7.901-9.835-8.24-22.91-.119-32.96"></svg:path>`,
})
export class ArcticonsMyNeomaBsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
