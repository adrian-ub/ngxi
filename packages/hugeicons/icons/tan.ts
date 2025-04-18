import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTanIcon],svg[hugeicons-tan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8.5 17l1.2-4m4.8 4l-1.2-4m-3.6 0l1.8-6l1.8 6m-3.6 0h3.6M22 7v10L17 7v10M2 7h2.5M7 7H4.5m0 10V7" color="currentColor"></svg:path>`,
})
export class HugeiconsTanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
