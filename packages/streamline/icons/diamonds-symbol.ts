import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineDiamondsSymbolIcon],svg[streamline-diamonds-symbol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.092 6.398L6.13.933a1.092 1.092 0 0 1 1.742 0l4.037 5.465c.266.36.266.844 0 1.204L7.87 13.066a1.092 1.092 0 0 1-1.742 0L2.092 7.602a1.01 1.01 0 0 1 0-1.204"></svg:path>`,
})
export class StreamlineDiamondsSymbolIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
