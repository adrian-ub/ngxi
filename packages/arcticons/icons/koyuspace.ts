import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKoyuspaceIcon],svg[arcticons-koyuspace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 2.5A21.5 21.5 0 1 0 45.5 24A21.51 21.51 0 0 0 24 2.5m0 37.14A15.44 15.44 0 0 1 8.78 24A15.44 15.44 0 0 1 24 8.36A15.44 15.44 0 0 1 39.22 24A15.44 15.44 0 0 1 24 39.64"></svg:path>`,
})
export class ArcticonsKoyuspaceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
