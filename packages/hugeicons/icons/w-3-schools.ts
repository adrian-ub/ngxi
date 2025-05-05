import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsW3SchoolsIcon],svg[hugeicons-w-3-schools-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M6 8H2l6 10l4.5-7l4.5 7l2-3.5L15 8h-5l-2 3zm13-2h3l-2 2h.5a1.5 1.5 0 0 1 0 3c-.653 0-1.294-.417-1.5-1" color="currentColor"></svg:path>`,
})
export class HugeiconsW3SchoolsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
