import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsYenSendIcon],svg[hugeicons-yen-send-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 3.5c.367 1.54 1.98 5.037 5.5 6.716m0 0C11.02 8.537 12.633 5.039 13 3.5m-5.5 6.716V20.5m-2.5-7h5m-5 4h5M22 13h-7.5m7.5 0c0 .7-1.994 2.008-2.5 2.5M22 13c0-.7-1.994-2.008-2.5-2.5" color="currentColor"></svg:path>`,
})
export class HugeiconsYenSendIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
