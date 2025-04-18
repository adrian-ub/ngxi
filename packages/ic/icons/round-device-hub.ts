import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundDeviceHubIcon],svg[ic-round-device-hub-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17 16l-4-4V8.82c1.35-.49 2.26-1.89 1.93-3.46a3.01 3.01 0 0 0-2.42-2.32A3 3 0 0 0 9 6c0 1.3.84 2.4 2 2.82V12l-4 4H4c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-2.05l4-4.2l4 4.2V20c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1z"></svg:path>`,
})
export class IcRoundDeviceHubIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
