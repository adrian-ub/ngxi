import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsMailOpenIcon],svg[majesticons-mail-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M4 10.165L2.033 8.554A3.004 3.004 0 0 1 4 6.17v3.994zm1 .82l5.732 4.696a2 2 0 0 0 2.536 0L19 10.985V5a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v5.985zm16.967-2.431L20 10.165V6.171a3.004 3.004 0 0 1 1.967 2.383zm-8.701 9.692L22 11.11V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-7.891l8.734 7.137a2 2 0 0 0 2.532 0zM10 9a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2h-4zm0-4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsMailOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
