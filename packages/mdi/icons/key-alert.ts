import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiKeyAlertIcon],svg[mdi-key-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6.5C4 4 6 2 8.5 2S13 4 13 6.5c0 1.96-1.25 3.63-3 4.24V15h3v3h-3v4H7V10.74c-1.75-.61-3-2.28-3-4.24m3 0C7 7.33 7.67 8 8.5 8S10 7.33 10 6.5S9.33 5 8.5 5S7 5.67 7 6.5M18 7h2v6h-2m0 4h2v-2h-2"></svg:path>`,
})
export class MdiKeyAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
