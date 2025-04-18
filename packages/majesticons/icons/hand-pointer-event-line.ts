import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsHandPointerEventLineIcon],svg[majesticons-hand-pointer-event-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 21v-2a4 4 0 0 0-4-4h-1a1 1 0 0 1-1-1V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v9l-2.4-3.2A2 2 0 0 0 6 14h-.434C4.701 14 4 14.701 4 15.566v0c0 .284.077.563.223.806L7 21m5-17V3m6 7h1M5 10h1m1.343-4.657l-.707-.707m10.021.707l.707-.707"></svg:path>`,
})
export class MajesticonsHandPointerEventLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
