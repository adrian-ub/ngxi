import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGelliIcon],svg[arcticons-gelli-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 19.78A4.22 4.22 0 1 0 28.22 24A4.23 4.23 0 0 0 24 19.78M24 2.5A21.5 21.5 0 1 0 45.5 24A21.51 21.51 0 0 0 24 2.5m0 11.83A9.68 9.68 0 1 1 14.32 24A9.66 9.66 0 0 1 24 14.33"></svg:path>`,
})
export class ArcticonsGelliIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
