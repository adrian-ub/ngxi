import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKLDIcon],svg[arcticons-k-l-d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 2.5c11.879 0 21.5 9.621 21.5 21.5S35.879 45.5 24 45.5S2.5 35.879 2.5 24S12.121 2.5 24 2.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.037 16.034c-2.336 5.458.194 11.777 5.652 14.114c5.458 2.336 11.776-.194 14.113-5.652q.105-.245.198-.496c2.2-5.515 8.454-8.203 13.97-6.004c5.515 2.2 8.203 8.454 6.004 13.97"></svg:path>`,
})
export class ArcticonsKLDIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
