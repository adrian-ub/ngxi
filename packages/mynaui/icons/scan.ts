import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiScanIcon],svg[mynaui-scan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.114 7.5c.144-1.463.47-2.447 1.204-3.182C5.636 3 7.758 3 12 3s6.364 0 7.682 1.318c.735.735 1.06 1.72 1.204 3.182m0 9c-.144 1.463-.47 2.447-1.204 3.182C18.364 21 16.242 21 12 21s-6.364 0-7.682-1.318c-.735-.735-1.06-1.72-1.204-3.182M3 12h.5m8.25 0h.5m-5 0h.5m8.5 0h.5m3.75 0h.5"></svg:path>`,
})
export class MynauiScanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
