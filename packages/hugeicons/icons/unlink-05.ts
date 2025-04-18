import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUnlink05Icon],svg[hugeicons-unlink-05-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.5 17H17a5 5 0 0 0 0-10h-3.5m-3 10H7A5 5 0 0 1 7 7h3.5m5 14L14 19.5M8.5 21l1.5-1.5M8.5 3L10 4.5M15.5 3L14 4.5" color="currentColor"></svg:path>`,
})
export class HugeiconsUnlink05Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
