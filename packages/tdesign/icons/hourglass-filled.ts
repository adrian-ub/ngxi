import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignHourglassFilledIcon],svg[tdesign-hourglass-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h16v3a8 8 0 0 1-4.124 7A8 8 0 0 1 20 19v3H4v-3a8 8 0 0 1 4.124-7A8 8 0 0 1 4 5zm14 3V4H6v1c0 .892.195 1.739.544 2.5h10.912c.35-.761.544-1.608.544-2.5m-6.998 8.083A6 6 0 0 0 6 19v1h1.1a5.01 5.01 0 0 1 3.902-3.9zm1.996 3.017A5.01 5.01 0 0 1 16.9 20H18v-1a6 6 0 0 0-5.002-5.917z"></svg:path>`,
})
export class TdesignHourglassFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
