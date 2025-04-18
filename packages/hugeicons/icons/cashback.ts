import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCashbackIcon],svg[hugeicons-cashback-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2C7.9 2 4.375 4.468 2.832 8M2 4.5l.5 4l4-1"></svg:path><svg:path d="M14.726 10.06c-.1-.762-.973-1.995-2.545-1.995c-1.826 0-2.594 1.014-2.75 1.52c-.243.678-.195 2.071 1.946 2.223c2.675.19 3.747.507 3.61 2.147c-.136 1.64-1.627 1.995-2.806 1.957c-1.178-.038-3.107-.58-3.182-2.04M11.994 6.5v1.57m0 7.833V17.5"></svg:path></svg:g>`,
})
export class HugeiconsCashbackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
