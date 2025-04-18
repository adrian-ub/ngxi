import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBeach02Icon],svg[hugeicons-beach-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21c-2.199-1.227-5.416-2-9-2s-6.801.773-9 2M9.5 6.45c-1.667-.335-4.5 0-6 3.033m6-3.032c1 .504 2 2.027 2 5.549m-2-5.55C12 5.948 15 7.472 15 11.498M9.5 6.45c-1-2.016-3-3.509-6.5-1.497M9.5 6.5c-1 1.833-3 7-3 13" color="currentColor"></svg:path>`,
})
export class HugeiconsBeach02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
