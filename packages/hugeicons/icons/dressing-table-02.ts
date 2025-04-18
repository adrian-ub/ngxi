import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDressingTable02Icon],svg[hugeicons-dressing-table-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 16c.5.333 1.3 1.4.5 3s0 2.667.5 3m-1-6H5m14 0v-3M5 16c-.5.333-1.3 1.4-.5 3s0 2.667-.5 3m1-6v-3m15 0h-1M4 13h1m14 0H5m2-5.5c0 3.038 2.239 5.5 5 5.5s5-2.462 5-5.5S14.761 2 12 2S7 4.462 7 7.5m4-.5l1.5-1.5m-1 4L13 8" color="currentColor"></svg:path>`,
})
export class HugeiconsDressingTable02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
