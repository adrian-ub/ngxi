import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWifiFullSignalIcon],svg[hugeicons-wifi-full-signal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m20.513 10.73l-5.337 7.279C13.714 20.003 12.983 21 12 21s-1.714-.997-3.176-2.991l-5.337-7.278c-1.079-1.473-1.619-2.209-1.46-3.154c.16-.946.79-1.36 2.053-2.19A14.36 14.36 0 0 1 12 3c2.904 0 5.617.873 7.92 2.387c1.262.83 1.893 1.244 2.053 2.19c.159.945-.381 1.681-1.46 3.154"></svg:path><svg:path d="M19 14a13.25 13.25 0 0 0-14 0m16-3C15.455 7 8.545 7 3 11m13 6a8.5 8.5 0 0 0-8 0"></svg:path></svg:g>`,
})
export class HugeiconsWifiFullSignalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
