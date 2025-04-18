import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShare06Icon],svg[hugeicons-share-06-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.708 7A9 9 0 1 1 3 13c0-2.305.867-4.408 2.292-6m6.733-5L12 14m.025-12a.7.7 0 0 0-.472.175C10.647 2.94 9 4.929 9 4.929M12.025 2a.7.7 0 0 1 .422.174C13.353 2.94 15 4.93 15 4.93" color="currentColor"></svg:path>`,
})
export class HugeiconsShare06Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
