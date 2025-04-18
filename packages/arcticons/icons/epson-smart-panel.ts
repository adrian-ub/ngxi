import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEpsonSmartPanelIcon],svg[arcticons-epson-smart-panel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="12.079" height="20.853" x="4.5" y="13.574" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.344" ry="1.344"></svg:rect><svg:rect width="17.15" height="6.687" x="26.35" y="19.552" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1" ry="1"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.685 26.24h10.48v6.066a1 1 0 0 1-1 1h-8.48a1 1 0 0 1-1-1zm1-10.673h8.48a1 1 0 0 1 1 1v2.985h-10.48v-2.985a1 1 0 0 1 1-1m1.408 13.181h5.664m-5.664 2.521h5.664"></svg:path><svg:circle cx="21.651" cy="22.896" r="1.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.387 32.439h2.305"></svg:path>`,
})
export class ArcticonsEpsonSmartPanelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
