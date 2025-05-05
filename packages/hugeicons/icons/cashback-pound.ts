import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCashbackPoundIcon],svg[hugeicons-cashback-pound-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2C7.9 2 4.375 4.468 2.832 8M2 4.5l.5 4l4-1"></svg:path><svg:path d="M12.5 12A2.5 2.5 0 1 1 15 9.5M12.5 12c-1 2.5-3.5 4-3.5 4h4.586c.905 0 1.774-.36 2.414-1m-3.5-3H9m3.5 0H14"></svg:path></svg:g>`,
})
export class HugeiconsCashbackPoundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
