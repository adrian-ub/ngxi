import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSmartWatch04Icon],svg[hugeicons-smart-watch-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.5 12c0-3.287 0-4.931.908-6.038a4 4 0 0 1 .554-.554C7.07 4.5 8.712 4.5 12 4.5c3.287 0 4.931 0 6.038.908a4 4 0 0 1 .554.554C19.5 7.07 19.5 8.712 19.5 12c0 3.287 0 4.931-.908 6.038a4 4 0 0 1-.554.554c-1.107.908-2.75.908-6.038.908c-3.287 0-4.931 0-6.038-.908a4 4 0 0 1-.554-.554C4.5 16.93 4.5 15.288 4.5 12M9 22h6M9 2h6m-5 8l3 3m2-4l-4 4" color="currentColor"></svg:path>`,
})
export class HugeiconsSmartWatch04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
