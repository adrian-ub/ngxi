import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMicrosoftEdgeLegacyIcon],svg[mdi-microsoft-edge-legacy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M2.737 10.808c1.092-12.17 19.779-12.17 18.46 2.75H8.614c0 4.295 5.802 5.651 10.925 2.75v4.22c-6.291 3.353-14.542.904-14.542-6.443c0-5.5 4.973-7.27 4.973-7.27s-1.394 1.77-1.431 3.24h7.158c0-7.121-9.796-4.484-12.96.753z" fill="currentColor"></svg:path>`,
})
export class MdiMicrosoftEdgeLegacyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
