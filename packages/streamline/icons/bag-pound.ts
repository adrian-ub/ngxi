import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBagPoundIcon],svg[streamline-bag-pound-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8.604 6.22s-1.312-.582-2.041.147c-.967.966.437 3.5-1.313 4.083c0 0 1.944.097 3.5 0m-.583-2.042H5.25"></svg:path><svg:path d="M7 13.5c3.5 0 6-1.238 6-3.994c0-2.995-1.5-4.992-4.5-6.49l1.18-1.518A.658.658 0 0 0 9.12.5H4.88a.66.66 0 0 0-.56.998L5.5 3.026C2.5 4.534 1 6.531 1 9.526C1 12.262 3.5 13.5 7 13.5"></svg:path></svg:g>`,
})
export class StreamlineBagPoundIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
