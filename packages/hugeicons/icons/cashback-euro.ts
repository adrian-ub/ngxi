import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCashbackEuroIcon],svg[hugeicons-cashback-euro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2C7.9 2 4.375 4.468 2.832 8M2 4.5l.5 4l4-1"></svg:path><svg:path d="M16 8.258a4.5 4.5 0 1 0 0 7.484M7.5 10.5h5m0 3h-5"></svg:path></svg:g>`,
})
export class HugeiconsCashbackEuroIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
