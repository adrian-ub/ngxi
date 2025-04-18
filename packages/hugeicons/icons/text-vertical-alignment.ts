import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTextVerticalAlignmentIcon],svg[hugeicons-text-vertical-alignment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 4h9m-9 4h9M2 12h20m-9 8h9m-9-4h9M8 8.5l-1.286-3m0 0L5.586 2.868a1 1 0 0 0-.067-.14a.5.5 0 0 0-.353-.222C5.128 2.5 5.086 2.5 5 2.5c-.085 0-.128 0-.166.006a.5.5 0 0 0-.353.221a1 1 0 0 0-.067.14L3.286 5.5m3.428 0H3.286m0 0L2 8.5m6 13l-1.286-3m0 0l-1.128-2.632a.5.5 0 0 0-.42-.362C5.128 15.5 5.086 15.5 5 15.5c-.085 0-.128 0-.166.006a.5.5 0 0 0-.42.362L3.286 18.5m3.428 0H3.286m0 0L2 21.5" color="currentColor"></svg:path>`,
})
export class HugeiconsTextVerticalAlignmentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
