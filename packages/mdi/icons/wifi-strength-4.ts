import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiWifiStrength4Icon],svg[mdi-wifi-strength-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3C7.79 3 3.7 4.41.38 7C4.41 12.06 7.89 16.37 12 21.5c4.08-5.08 8.24-10.26 11.65-14.5C20.32 4.41 16.22 3 12 3"></svg:path>`,
})
export class MdiWifiStrength4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
