import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPrivatelocationIcon],svg[arcticons-privatelocation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 12.41a7.26 7.26 0 0 0-7.26 7.26h0c0 5.68 5.56 12.53 7 14.21a.43.43 0 0 0 .62 0h.05c1.41-1.68 6.85-8.52 6.85-14.2A7.26 7.26 0 0 0 24 12.41m0 10a2.72 2.72 0 1 1 2.71-2.73v0a2.71 2.71 0 0 1-2.71 2.7Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.2 4.86L6.69 11.25V27C6.69 35.44 24 43.5 24 43.5S41.31 35.44 41.31 27V11.25L25.8 4.86a4.68 4.68 0 0 0-3.6 0"></svg:path>`,
})
export class ArcticonsPrivatelocationIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
