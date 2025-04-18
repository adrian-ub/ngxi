import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerDesktopSettingSettingsDesktopDisplayDeviceGearCogComputerIcon],svg[streamline-computer-desktop-setting-settings-desktop-display-device-gear-cog-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12 2h1a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5H1a.5.5 0 0 1-.5-.5v-8A.5.5 0 0 1 1 2h1m4 9l-1 2.5M8 11l1 2.5m-5 0h6M7.03 2v1.5M4 3.75l1.3.75M4 7.25l1.3-.75M7.03 9V7.5m3.03-.25l-1.3-.75m1.3-2.75l-1.3.75"></svg:path><svg:circle cx="7.03" cy="5.5" r="2"></svg:circle></svg:g>`,
})
export class StreamlineComputerDesktopSettingSettingsDesktopDisplayDeviceGearCogComputerIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
