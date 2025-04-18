import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMoreHorizontalCircle01Icon],svg[hugeicons-more-horizontal-circle-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0m-7.5 0a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0M6 12a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0" color="currentColor"></svg:path>`,
})
export class HugeiconsMoreHorizontalCircle01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
