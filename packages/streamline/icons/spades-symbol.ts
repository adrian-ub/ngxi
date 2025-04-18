import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineSpadesSymbolIcon],svg[streamline-spades-symbol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.491 4.95L5.74.997a1.855 1.855 0 0 1 2.527 0l4.247 3.953c2.532 2.379-.162 7.342-4.072 5.262l.667 3.288H4.892l.666-3.284C1.644 12.297-1.047 7.335 1.49 4.95Z"></svg:path>`,
})
export class StreamlineSpadesSymbolIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
