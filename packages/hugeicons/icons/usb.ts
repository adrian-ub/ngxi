import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUsbIcon],svg[hugeicons-usb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M15.5 6v-.5c0-1.404 0-2.107-.337-2.611a2 2 0 0 0-.552-.552C14.107 2 13.404 2 12 2s-2.107 0-2.611.337a2 2 0 0 0-.552.552C8.5 3.393 8.5 4.096 8.5 5.5V6"></svg:path><svg:path d="M6.004 7.113C5.937 6.243 6.64 5.5 7.53 5.5h8.94c.89 0 1.593.743 1.526 1.613l-.184 2.379a9.9 9.9 0 0 1-1.68 4.785l-.6.885a3.08 3.08 0 0 1-2.548 1.338h-1.968a3.08 3.08 0 0 1-2.547-1.338l-.601-.885a9.9 9.9 0 0 1-1.68-4.785zM12 17v5M11 8.5h2"></svg:path></svg:g>`,
})
export class HugeiconsUsbIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
