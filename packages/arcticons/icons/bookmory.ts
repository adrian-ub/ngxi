import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBookmoryIcon],svg[arcticons-bookmory-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 42.5h27.75a9.25 9.25 0 0 0 0-18.5a9.25 9.25 0 0 0 0-18.5H5.5m0 18.5h27.75M5.5 33.25h27.75M5.5 14.75h27.75"></svg:path>`,
})
export class ArcticonsBookmoryIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
