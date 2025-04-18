import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixAlarmBellFilledIcon],svg[ix-alarm-bell-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M325.492 405.334c-5.176 36.184-36.295 64-73.91 64c-37.616 0-68.735-27.816-73.91-64ZM64 384l42.667-121.813v-48.853c0-94.294 66.773-170.667 149.333-170.667a138.7 138.7 0 0 1 33.067 6.187c69.12 15.786 116.266 89.813 116.266 170.666v42.667L448 384z"></svg:path>`,
})
export class IxAlarmBellFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
