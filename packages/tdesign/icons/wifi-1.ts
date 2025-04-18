import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignWifi1Icon],svg[tdesign-wifi-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.43 7.686L12 18.4l8.57-10.713a15.015 15.015 0 0 0-17.14 0m-2.051-.961c6.192-4.967 15.05-4.967 21.243 0l.779.625l-11.4 14.25L.6 7.35z"></svg:path>`,
})
export class TdesignWifi1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
