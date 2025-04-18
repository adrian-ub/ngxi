import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTypeCursorIcon],svg[hugeicons-type-cursor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 16c-.93 0-1.395 0-1.776-.102a3 3 0 0 1-2.122-2.121C2 13.395 2 12.93 2 12s0-1.395.102-1.777a3 3 0 0 1 2.122-2.12C4.605 8 5.07 8 6 8m6 8h6c.93 0 1.395 0 1.776-.102a3 3 0 0 0 2.122-2.121C22 13.395 22 12.93 22 12s0-1.395-.102-1.777a3 3 0 0 0-2.122-2.12C19.396 8 18.93 8 18 8h-6M7 3h2m2 0H9m0 0v18m0 0H7m2 0h2" color="currentColor"></svg:path>`,
})
export class HugeiconsTypeCursorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
