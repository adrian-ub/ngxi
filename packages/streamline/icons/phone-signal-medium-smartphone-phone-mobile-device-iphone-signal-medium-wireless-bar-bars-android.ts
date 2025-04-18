import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlinePhoneSignalMediumSmartphonePhoneMobileDeviceIphoneSignalMediumWirelessBarBarsAndroidIcon],svg[streamline-phone-signal-medium-smartphone-phone-mobile-device-iphone-signal-medium-wireless-bar-bars-android-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.75 7.5H.5v6h4.25m0-9h4.5v9h-4.5zm4.5 9h4.25"></svg:path>`,
})
export class StreamlinePhoneSignalMediumSmartphonePhoneMobileDeviceIphoneSignalMediumWirelessBarBarsAndroidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
