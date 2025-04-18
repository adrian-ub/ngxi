import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWifiOff01Icon],svg[hugeicons-wifi-off-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M8.5 14.5c1.121-1.106 2.464-1.613 4-1.479m6-1.521c-1.493-1.32-3.215-2.226-5-2.5m-8 2.5c1.093-.91 2.278-1.587 3.5-2m13-1c-3.928-3.317-8.264-4.571-12.5-3.762M2 8.5c1.224-1.034 2.5-2 3.5-2.5"></svg:path><svg:circle cx="12" cy="18" r="1.5"></svg:circle><svg:path d="m2 2l20 20"></svg:path></svg:g>`,
})
export class HugeiconsWifiOff01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
