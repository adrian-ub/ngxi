import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCrown02Icon],svg[hugeicons-crown-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M5 20h14M8 12a2 2 0 0 1-1.907-2.606L3.54 7.224a.95.95 0 0 0-1.268.04a.88.88 0 0 0-.229.91l2.5 7.461A2 2 0 0 0 6.439 17h11.122a2 2 0 0 0 1.896-1.365l2.5-7.461a.88.88 0 0 0-.229-.91a.95.95 0 0 0-1.268-.04l-2.553 2.17q.091.289.093.606a2 2 0 1 1-3.238-1.571l-2.07-4.967a.75.75 0 0 0-1.384 0l-2.07 4.967A2 2 0 0 1 8 12" color="currentColor"></svg:path>`,
})
export class HugeiconsCrown02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
