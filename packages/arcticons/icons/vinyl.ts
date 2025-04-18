import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsVinylIcon],svg[arcticons-vinyl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 2.5A21.5 21.5 0 1 0 45.5 24A21.51 21.51 0 0 0 24 2.5M24 8A16.06 16.06 0 0 0 8 24h0m16-10.38A10.38 10.38 0 0 0 13.62 24h0M24 17.86A6.14 6.14 0 1 1 17.86 24A6.14 6.14 0 0 1 24 17.86m0 16.52A10.38 10.38 0 0 0 34.38 24h0M24 40.05a16.06 16.06 0 0 0 16-16h0"></svg:path>`,
})
export class ArcticonsVinylIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
