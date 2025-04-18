import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlinePhoneSignalLowPhoneMobileDeviceSignalWirelessSmartphoneIphoneBarLowBarsAndroidIcon],svg[streamline-phone-signal-low-phone-mobile-device-signal-wireless-smartphone-iphone-bar-low-bars-android-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 7.5h4.25v6H.5zm10.5 6h2.5m-8.75 0H8.5"></svg:path>`,
})
export class StreamlinePhoneSignalLowPhoneMobileDeviceSignalWirelessSmartphoneIphoneBarLowBarsAndroidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
