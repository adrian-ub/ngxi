import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxMemoryCardIcon],svg[bx-memory-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V8a1 1 0 0 0-.293-.707l-5-5A1 1 0 0 0 14 2H6c-1.103 0-2 .897-2 2m14 4.414L18.001 20H6V4h7.586z"></svg:path><svg:path fill="currentColor" d="M8 6h2v4H8zm4 0h2v4h-2z"></svg:path>`,
})
export class BxMemoryCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
