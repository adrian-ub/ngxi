import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWifiDisconnected04Icon],svg[hugeicons-wifi-disconnected-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 21c-.983 0-1.714-.997-3.176-2.991l-5.337-7.278c-1.079-1.473-1.619-2.209-1.46-3.154c.16-.946.79-1.36 2.053-2.19A14.36 14.36 0 0 1 12 3c2.904 0 5.617.873 7.92 2.387c1.262.83 1.893 1.244 2.053 2.19c.159.945-.381 1.681-1.46 3.154L19 12.699M21 15l-6 6m6 0l-6-6" color="currentColor"></svg:path>`,
})
export class HugeiconsWifiDisconnected04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
