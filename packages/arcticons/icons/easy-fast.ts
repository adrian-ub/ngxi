import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEasyFastIcon],svg[arcticons-easy-fast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.611 11.668c6.602 9.428 4.608 22.383-4.523 29.389s-22.16 5.58-29.558-3.238C.132 29.003.989 15.923 9.475 8.15C17.96.374 31.065.66 39.203 8.798L12.285 35.715"></svg:path>`,
})
export class ArcticonsEasyFastIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
