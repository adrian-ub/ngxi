import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignWifi1FilledIcon],svg[tdesign-wifi-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.046 6.725c6.192-4.967 15.05-4.967 21.243 0l.779.625l-11.4 14.25L1.265 7.35z"></svg:path>`,
})
export class TdesignWifi1FilledIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}
