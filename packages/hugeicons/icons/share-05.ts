import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShare05Icon],svg[hugeicons-share-05-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 7c.774.16 1.359.429 1.828.876C21 8.992 21 10.788 21 14.38s0 5.388-1.172 6.504S16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.116S3 17.972 3 14.38s0-5.388 1.172-6.504C4.642 7.429 5.226 7.16 6 7m6.025-5L12 14m.025-12a.7.7 0 0 0-.472.175C10.647 2.94 9 4.929 9 4.929M12.025 2a.7.7 0 0 1 .422.174C13.353 2.94 15 4.93 15 4.93" color="currentColor"></svg:path>`,
})
export class HugeiconsShare05Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
