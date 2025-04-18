import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsMemoryCardIcon],svg[bxs-memory-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 2H6c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V7zm-6 8H7V6h2zm3 0h-2V6h2zm3 0h-2V6h2z"></svg:path>`,
})
export class BxsMemoryCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
