import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsYandexWithAliceIcon],svg[arcticons-yandex-with-alice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M45.5 38.5a7 7 0 1 1-14 0a7 7 0 0 1 14 0m-12.068 4.82A21.5 21.5 0 0 1 24 45.5C12.126 45.5 2.5 35.874 2.5 24S12.126 2.5 24 2.5S45.5 12.126 45.5 24h0a21.5 21.5 0 0 1-2.174 9.42m-.855 7.342c-.149-2.454-1.43-5.147-3.97-6.633c-2.543 1.486-3.823 4.179-3.972 6.633c.409.534 1.644 1.446 3.971 1.29c2.328.156 3.562-.756 3.971-1.29M24 35.5V26l-7.619-13.5m15.238 0l-5.216 9.873"></svg:path>`,
})
export class ArcticonsYandexWithAliceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
