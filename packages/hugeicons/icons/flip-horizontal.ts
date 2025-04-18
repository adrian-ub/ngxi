import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFlipHorizontalIcon],svg[hugeicons-flip-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.295 14.42c1.359-.953 2.038-1.43 2.17-2.076a1.7 1.7 0 0 0 0-.688c-.132-.646-.811-1.123-2.17-2.076C4.65 8.425 3.827 7.847 3.153 8.035c-.234.065-.45.187-.63.355C2 8.877 2 9.918 2 12s0 3.123.522 3.61c.181.168.397.29.631.355c.674.188 1.497-.39 3.142-1.545m11.41-4.84c-1.359.953-2.038 1.43-2.17 2.076a1.7 1.7 0 0 0 0 .688c.132.646.811 1.123 2.17 2.076c1.645 1.155 2.468 1.733 3.142 1.545c.234-.065.45-.187.63-.355C22 15.123 22 14.082 22 12s0-3.123-.522-3.61a1.5 1.5 0 0 0-.631-.355c-.675-.188-1.497.39-3.142 1.545M12 14v-4m0-3.5V3m0 18v-3.5" color="currentColor"></svg:path>`,
})
export class HugeiconsFlipHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
