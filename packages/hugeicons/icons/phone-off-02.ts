import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPhoneOff02Icon],svg[hugeicons-phone-off-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 19h.009M11 5h2M2 2l20 20m-3.005-3.004c-.18 1.92-1.567 3.004-3.5 3.004H8.504a3.5 3.5 0 0 1-3.5-3.5l.1-13.014M7.153 2.27A3.5 3.5 0 0 1 8.505 2h6.991a3.5 3.5 0 0 1 3.5 3.5v9.505" color="currentColor"></svg:path>`,
})
export class HugeiconsPhoneOff02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
