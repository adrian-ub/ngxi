import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiWifiIcon],svg[openmoji-wifi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="openmojiWifi0" d="M58.37 30.524c-5.651-5.651-13.458-9.146-22.081-9.146c-8.637 0-16.455 3.506-22.108 9.172l-3.813-3.763c6.624-6.65 15.792-10.767 25.92-10.767c10.103 0 19.25 4.095 25.87 10.716z"></svg:path><svg:path id="openmojiWifi1" d="M21.917 38.286a20.45 20.45 0 0 1 14.637-6.142a20.45 20.45 0 0 1 14.373 5.876l3.784-3.792a25.8 25.8 0 0 0-18.157-7.44a25.8 25.8 0 0 0-18.425 7.71z"></svg:path><svg:path id="openmojiWifi2" d="M43.352 45.597a9.77 9.77 0 0 0-6.798-2.74a9.77 9.77 0 0 0-7.062 3.004l-3.814-3.814a15.1 15.1 0 0 1 10.876-4.6a15.1 15.1 0 0 1 10.61 4.332z"></svg:path></svg:defs><svg:g fill="#9B9B9A"><svg:use href="#openmojiWifi0"></svg:use><svg:use href="#openmojiWifi1"></svg:use><svg:use href="#openmojiWifi2"></svg:use><svg:circle cx="36.289" cy="52.605" r="2.672"></svg:circle></svg:g><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:use href="#openmojiWifi0"></svg:use><svg:use href="#openmojiWifi1"></svg:use><svg:use href="#openmojiWifi2"></svg:use><svg:circle cx="36.289" cy="52.605" r="2.672"></svg:circle></svg:g>`,
})
export class OpenmojiWifiIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
