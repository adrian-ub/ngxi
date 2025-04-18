import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWattpadSquareIcon],svg[hugeicons-wattpad-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M8.52 8.709c.96.452.8 1.695.6 2.26c1.23-2.382 4.71-4.947 4.71-.67c.302-.481 1.205-1.556 2.41-2.013c1.506-.572 2.635.571.838 2.285c0 0-.898.858-1.796 2.572c-.899 1.714-3.294 3.428-4.062-.478c-2.1 5.087-4.5 3.674-5.1.283c-.601-3.391 1.2-4.805 2.4-4.24"></svg:path><svg:path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></svg:path></svg:g>`,
})
export class HugeiconsWattpadSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
