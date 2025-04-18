import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciBellOffIcon],svg[ci-bell-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v1a3 3 0 1 0 6 0v-1m-6 0h6m-6 0H5a1 1 0 0 1-.993-.883L4 16v-.586a1 1 0 0 1 .293-.707l.51-.51A.67.67 0 0 0 5 13.722V10c0-1.842.711-3.517 1.874-4.767M15 17h4M5 3l16 16m-2-6.001V10a7 7 0 0 0-7-7l-.24.004a7 7 0 0 0-2.29.467"></svg:path>`,
})
export class CiBellOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
