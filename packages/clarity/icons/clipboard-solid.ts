import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityClipboardSolidIcon],svg[clarity-clipboard-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29.29 5h-7.12a4.45 4.45 0 0 0-4.11-3A4.46 4.46 0 0 0 14 5H7a1.75 1.75 0 0 0-2 1.69v25.62A1.7 1.7 0 0 0 6.71 34h22.58A1.7 1.7 0 0 0 31 32.31V6.69A1.7 1.7 0 0 0 29.29 5m-18 3a1 1 0 0 1 1-1h3.44v-.69a2.31 2.31 0 1 1 4.63 0V7h3.44a1 1 0 0 1 1 1v2H11.31ZM25 28H11v-2h14Zm0-4H11v-2h14Zm0-4H11v-2h14Zm0-4H11v-2h14Z" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityClipboardSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
