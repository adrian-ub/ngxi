import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiWifiStrength3Icon],svg[mdi-wifi-strength-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3C7.79 3 3.7 4.41.38 7C4.41 12.06 7.89 16.37 12 21.5c4.08-5.08 8.24-10.26 11.65-14.5C20.32 4.41 16.22 3 12 3m0 2c3.07 0 6.09.86 8.71 2.45l-1.94 2.43C17.26 9 14.88 8 12 8C9 8 6.68 9 5.21 9.84l-1.94-2.4C5.91 5.85 8.93 5 12 5"></svg:path>`,
})
export class MdiWifiStrength3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
