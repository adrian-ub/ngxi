import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWifiNoSignalIcon],svg[hugeicons-wifi-no-signal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m20.513 10.801l-5.337 6.874C13.714 19.558 12.983 20.5 12 20.5s-1.714-.942-3.176-2.825l-5.337-6.874c-1.079-1.39-1.619-2.085-1.46-2.979c.16-.893.79-1.285 2.053-2.068A14.97 14.97 0 0 1 12 3.5c2.904 0 5.617.825 7.92 2.254c1.262.783 1.893 1.175 2.053 2.068c.159.894-.381 1.589-1.46 2.98" color="currentColor"></svg:path>`,
})
export class HugeiconsWifiNoSignalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
