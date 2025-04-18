import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSunFallFilledIcon],svg[tdesign-sun-fall-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3v3h-2V3zm7.485 3.928L18.364 9.05L16.95 7.636l2.121-2.122zM4.93 5.514l2.12 2.122L5.636 9.05L3.515 6.929zM6 15v-1a6 6 0 0 1 12 0v1zm-5-2h3v2H1zm19 0h3v2h-3zM1 17h8.303L12 18.798L14.697 17H23v2h-7.697L12 21.202L8.697 19H1z"></svg:path>`,
})
export class TdesignSunFallFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
