import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsQuadrixIcon],svg[arcticons-quadrix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.39 14.39h19.22v19.22H14.39z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M44.74 44.723c-3.532-.894-7.552-2.257-10.07-2.257l-24.12-.006a5 5 0 0 1-4.998-5V10.535a5 5 0 0 1 5-5h26.55a5.36 5.36 0 0 1 5.375 5.374l.025 24.292c0 2.412 1.317 6.206 2.238 9.522"></svg:path>`,
})
export class ArcticonsQuadrixIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
