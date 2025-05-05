import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCashbackYenIcon],svg[hugeicons-cashback-yen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2C7.9 2 4.375 4.468 2.832 8M2 4.5l.5 4l4-1m2.5 0l3 3.5m0 0l3-3.5M12 11v5.5m2.5-3.5h-5" color="currentColor"></svg:path>`,
})
export class HugeiconsCashbackYenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
