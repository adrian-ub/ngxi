import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixAlarmBellCancelledFilledIcon],svg[ix-alarm-bell-cancelled-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M325.492 405.334c-5.176 36.184-36.294 64-73.91 64s-68.734-27.816-73.91-64ZM452.42 422.25l-30.17 30.17L353.83 384H64l42.667-121.813v-48.853c0-23.103 4.008-45.13 11.275-65.221l-58.36-58.361l30.17-30.17l48.588 48.59v-.002zM256 42.667a138.7 138.7 0 0 1 33.067 6.187c69.12 15.786 116.267 89.813 116.267 170.666v42.667l28.375 81.012L166.862 76.351c24.254-20.64 54.19-33.06 86.666-33.661Z"></svg:path>`,
})
export class IxAlarmBellCancelledFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
