import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCandyCaneIcon],svg[streamline-candy-cane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 5a1.5 1.5 0 0 1 3 0v7a1.5 1.5 0 0 0 3 0V5a4.5 4.5 0 1 0-9 0v1a1.5 1.5 0 0 0 3 0zm3 5l3-3M8.42 4.51L9.95 1.6M5.86 4.02L3.03 2.88"></svg:path>`,
})
export class StreamlineCandyCaneIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
