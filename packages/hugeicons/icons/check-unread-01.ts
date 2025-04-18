import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCheckUnread01Icon],svg[hugeicons-check-unread-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 14.5S7 15 8.5 18c0 0 1.662-2.74 3.976-5.524M19 7c-1.546.574-3.153 1.865-4.63 3.37M5 5l14 14" color="currentColor"></svg:path>`,
})
export class HugeiconsCheckUnread01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
