import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilWifiIcon],svg[uil-wifi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 15a3 3 0 1 0 3 3a3 3 0 0 0-3-3m0 4a1 1 0 1 1 1-1a1 1 0 0 1-1 1m0-8a7.06 7.06 0 0 0-4.95 2.05a1 1 0 0 0 0 1.41a1 1 0 0 0 1.41 0a5 5 0 0 1 7.08 0a1 1 0 0 0 .7.3a1 1 0 0 0 .76-1.71A7.06 7.06 0 0 0 12 11m0-4a11.08 11.08 0 0 0-7.78 3.22a1 1 0 0 0 1.42 1.42a9 9 0 0 1 12.72 0a1 1 0 0 0 .71.29a1 1 0 0 0 .71-.29a1 1 0 0 0 0-1.42A11.08 11.08 0 0 0 12 7m10.61.39a15 15 0 0 0-21.22 0a1 1 0 0 0 1.42 1.42a13 13 0 0 1 18.38 0a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42"></svg:path>`,
})
export class UilWifiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
