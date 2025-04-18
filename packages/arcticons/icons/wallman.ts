import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWallmanIcon],svg[arcticons-wallman-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.474 43.5a4.14 4.14 0 0 1-3.914-5.487l8.92-25.916a4.14 4.14 0 0 1 7.828 2.694l-8.92 25.916a4.14 4.14 0 0 1-3.914 2.793m16.133-4.803a4.14 4.14 0 0 1-3.914-5.487l8.92-25.916a4.14 4.14 0 0 1 7.828 2.694l-8.92 25.915a4.14 4.14 0 0 1-3.914 2.794m-3.917-2.803l-3.311-9.69m3.931-14.098l3.311 9.69"></svg:path>`,
})
export class ArcticonsWallmanIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
