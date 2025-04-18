import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPlaceholderBoldIcon],svg[ph-placeholder-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 159L69 52h135ZM52 69l135 135H52Z"></svg:path>`,
})
export class PhPlaceholderBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
