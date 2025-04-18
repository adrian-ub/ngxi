import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPatioIcon],svg[hugeicons-patio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 16c-.306-.613-.933-1-1.618-1H3.618c-.685 0-1.312.387-1.618 1m1 6h18M5 15v7m4.5-7v7m5-7v7m4.5-7v7M12 7l3-4m-3 4H6.5M12 7h5.5M12 7L9 3M6 8a6 6 0 1 1 12 0v7H6z" color="currentColor"></svg:path>`,
})
export class HugeiconsPatioIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
