import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsHandPointerIcon],svg[majesticons-hand-pointer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 17v1a2 2 0 0 1-2 2H8.236a2 2 0 0 1-1.789-1.106l-2.276-4.552A1.618 1.618 0 0 1 5.618 12H6a2 2 0 0 1 1.6.8L10 16V6a2 2 0 1 1 4 0v6a1 1 0 0 0 1 1h1a4 4 0 0 1 4 4"></svg:path>`,
})
export class MajesticonsHandPointerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
