import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSword02Icon],svg[hugeicons-sword-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.06 21.06a1.5 1.5 0 1 1-2.12-2.121a1.5 1.5 0 0 1 2.12 2.122M8 16l-2.5 2.5m4-2l10.573-9.297a1.73 1.73 0 0 0 .554-.92L21.5 2.5l-3.783.873a1.73 1.73 0 0 0-.92.554L7.5 14.5M4 13h.572a2 2 0 0 1 1.414.586l4.428 4.428A2 2 0 0 1 11 19.428V20" color="currentColor"></svg:path>`,
})
export class HugeiconsSword02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
