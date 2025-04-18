import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPoolTableIcon],svg[hugeicons-pool-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M5.35 17c-1.343 0-2.015 0-2.433-.44C2.5 16.122 2.5 15.415 2.5 14V6c0-1.414 0-2.121.417-2.56C3.335 3 4.007 3 5.35 3h13.3c1.344 0 2.015 0 2.433.44c.417.439.417 1.146.417 2.56v8c0 1.414 0 2.121-.417 2.56c-.418.44-1.09.44-2.433.44zm6.662-8H12"></svg:path><svg:path d="M3 14a3 3 0 0 1 3 3M3 6a3 3 0 0 0 3-3m15 11a3 3 0 0 0-3 3m3-11a3 3 0 0 1-3-3m-4 14a2 2 0 1 0-4 0m4-14a2 2 0 1 1-4 0m.5 8.5L4 21"></svg:path></svg:g>`,
})
export class HugeiconsPoolTableIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
