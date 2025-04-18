import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsZandakaKakuninIcon],svg[arcticons-zandaka-kakunin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.457 36.878c1.115 0 1.816-1.28 1.247-2.236h.001L14.901 13.136c-.569-.956-.903-2.013-2.018-2.013"></svg:path><svg:rect width="39" height="25.755" x="4.5" y="11.123" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3.4" ry="3.4"></svg:rect>`,
})
export class ArcticonsZandakaKakuninIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
