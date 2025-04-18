import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSecuredNetworkIcon],svg[hugeicons-secured-network-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M6 13a6 6 0 1 1 12 0a6 6 0 0 1-12 0"></svg:path><svg:path d="M15.5 8V5.52C15.5 3.577 13.933 2 12 2S8.5 3.576 8.5 5.52V8m3.5 5h.009M12 19v3m0 0h8m-8 0H4"></svg:path></svg:g>`,
})
export class HugeiconsSecuredNetworkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
