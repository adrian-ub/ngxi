import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAllToolsIcon],svg[arcticons-all-tools-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.294 43.5c6.157-22.318 11.74-30.939 19.74-38.619c.912-.875 2.413-.136 2.27 1.12c-1.244 10.878 5.59 29.466 9.402 37.499"></svg:path>`,
})
export class ArcticonsAllToolsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
