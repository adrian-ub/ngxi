import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayBlurIcon],svg[subway-blur-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M391.3 213.4C343.4 134.8 296.4 106.7 258.5 0c-38.1 106.7-84.9 134.8-132.8 213.4c-43.3 71-56.9 170.7 0 234.7c37.9 42.7 76 64.1 132.8 63.9c57.1.2 94.9-21.2 132.8-63.9c56.9-64 43.3-163.7 0-234.7"></svg:path>`,
})
export class SubwayBlurIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
