import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBridgeIcon],svg[hugeicons-bridge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 7c.5 0 2-.5 3-2c1 1.5 3 4 6 4s5-2.5 6-4c1 1.5 2.5 2 3 2M6 4v16m-4-4h20M18 4v16M10 9v7m4-7v7" color="currentColor"></svg:path>`,
})
export class HugeiconsBridgeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
