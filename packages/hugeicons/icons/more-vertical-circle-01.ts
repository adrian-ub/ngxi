import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMoreVerticalCircle01Icon],svg[hugeicons-more-vertical-circle-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.5 4.5a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0m0 7.5a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0m0 7.5a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0" color="currentColor"></svg:path>`,
})
export class HugeiconsMoreVerticalCircle01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
