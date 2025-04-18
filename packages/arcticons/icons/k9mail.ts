import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsK9mailIcon],svg[arcticons-k9mail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.942 35.91a1.97 1.97 0 0 0-1.97-1.97h-3.943a1.97 1.97 0 0 0-1.971 1.971v3.647a3.942 3.942 0 1 0 7.884 0Zm9.679-22.096L24 22.369l-13.621-8.555"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m11.187 31.24l4.416 6.553a2.61 2.61 0 0 0 2.276 1.301h2.179m7.884 0h2.169a2.61 2.61 0 0 0 2.276-1.3l4.426-6.555"></svg:path><svg:rect width="33.195" height="20.096" x="7.402" y="11.143" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.906 11.143V8.862"></svg:path><svg:rect width="7.855" height="4.362" x="12.622" y="4.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.5"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.094 11.143V8.862"></svg:path><svg:rect width="7.855" height="4.362" x="27.523" y="4.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.5" transform="rotate(-180 31.45 6.68)"></svg:rect>`,
})
export class ArcticonsK9mailIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
