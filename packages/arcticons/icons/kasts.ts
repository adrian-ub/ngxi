import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKastsIcon],svg[arcticons-kasts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="18.805" r="3.27" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.945 21.935L32.472 43.5m-9.417-21.565L15.527 43.5m11.126-16.672l-7.105 5.154l11.887 8.545M29.586 25.32a8.583 8.583 0 1 0-10.999.145"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.368 31.068a14.304 14.304 0 1 0-14.704.019"></svg:path>`,
})
export class ArcticonsKastsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
