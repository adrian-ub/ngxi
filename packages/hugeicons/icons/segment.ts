import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSegmentIcon],svg[hugeicons-segment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 14L9.071 8.5m0 0L7.38 3.674c-.047-.134-.07-.2-.1-.257a.76.76 0 0 0-.53-.407C6.692 3 6.628 3 6.5 3s-.192 0-.25.01a.76.76 0 0 0-.53.407c-.029.056-.052.123-.1.257L3.93 8.5m5.142 0H3.93m0 0L2 14m18 5a2 2 0 1 1-4 0m4 0a2 2 0 1 0-4 0m4 0h2m-6 0H8m0 0a2 2 0 1 1-4 0m4 0a2 2 0 1 0-4 0m0 0H2M15 8.5V5c0-.943 0-1.414.293-1.707S16.057 3 17 3h1.25a2.75 2.75 0 1 1 0 5.5zm0 0h4.25a2.75 2.75 0 1 1 0 5.5H17c-.943 0-1.414 0-1.707-.293S15 12.943 15 12z" color="currentColor"></svg:path>`,
})
export class HugeiconsSegmentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
