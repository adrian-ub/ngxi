import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWifiConnected01Icon],svg[hugeicons-wifi-connected-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 20.5c-.983 0-1.714-.997-3.176-2.991L3.487 9.731c-1.079-1.473-1.619-2.209-1.46-3.154c.16-.946.79-1.36 2.053-2.19A14.36 14.36 0 0 1 12 2c2.904 0 5.617.873 7.92 2.387c1.262.83 1.893 1.244 2.053 2.19c.159.945-.381 1.681-1.46 3.154L16 16"></svg:path><svg:path d="M19 13a13.25 13.25 0 0 0-14 0m16-3C15.455 6 8.545 6 3 10m13 6a8.5 8.5 0 0 0-8 0m6 3s1 0 2 2c0 0 3.177-5 6-6"></svg:path></svg:g>`,
})
export class HugeiconsWifiConnected01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
