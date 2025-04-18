import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignInternetIcon],svg[tdesign-internet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.055 11a9.01 9.01 0 0 1 6.277-7.598A16.9 16.9 0 0 0 7.029 11zm7.937-9.954C5.39 1.554 1 6.265 1 12s4.39 10.446 9.992 10.955l.008.01l.425.02A13 13 0 0 0 12 23a11 11 0 0 0 .575-.015l.425-.02l.008-.01C18.61 22.444 23 17.735 23 12S18.61 1.554 13.008 1.046L13 1.036l-.426-.021a11 11 0 0 0-1.148 0l-.426.02zM12.002 3a14.9 14.9 0 0 1 2.965 8H9.033a14.9 14.9 0 0 1 2.966-8H12M7.028 13c.16 2.76.98 5.345 2.303 7.598A9.01 9.01 0 0 1 3.055 13zm4.97 8a14.9 14.9 0 0 1-2.966-8h5.934A14.9 14.9 0 0 1 12 21zm2.67-.402A16.9 16.9 0 0 0 16.97 13h3.974a9.01 9.01 0 0 1-6.276 7.598M16.97 11c-.16-2.76-.98-5.345-2.303-7.598A9.01 9.01 0 0 1 20.945 11z"></svg:path>`,
})
export class TdesignInternetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
