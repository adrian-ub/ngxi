import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsIAmIcon],svg[arcticons-i-am-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10.768 19.106v9.788m16.676-4.037a2.447 2.447 0 1 1 4.894 0v4.037m-4.894-6.484v6.484"></svg:path><svg:path d="M32.338 24.857a2.447 2.447 0 1 1 4.894 0v4.037M24.92 26.447a2.447 2.447 0 0 1-2.447 2.447h0a2.447 2.447 0 0 1-2.447-2.447v-1.59a2.447 2.447 0 0 1 2.447-2.448h0a2.447 2.447 0 0 1 2.447 2.447m0 4.038v-6.485"></svg:path></svg:g>`,
})
export class ArcticonsIAmIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
