import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineShoppingCatergoriesPhoneAndroidPhoneMobileDeviceSmartphoneIphoneIcon],svg[streamline-shopping-catergories-phone-android-phone-mobile-device-smartphone-iphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="10" height="13" x="2" y=".5" rx="1"></svg:rect><svg:path d="M4.5 3h5v5h-5z"></svg:path><svg:circle cx="7" cy="10.75" r=".5"></svg:circle></svg:g>`,
})
export class StreamlineShoppingCatergoriesPhoneAndroidPhoneMobileDeviceSmartphoneIphoneIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
