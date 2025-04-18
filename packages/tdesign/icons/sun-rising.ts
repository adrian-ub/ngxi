import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSunRisingIcon],svg[tdesign-sun-rising-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3v3h-2V3zm7.485 3.928L18.364 9.05L16.95 7.636l2.121-2.122zM4.93 5.514l2.12 2.122L5.636 9.05L3.515 6.929zM12 10a4 4 0 0 0-4 4v1H6v-1a6 6 0 0 1 12 0v1h-2v-1a4 4 0 0 0-4-4M1 13h3v2H1zm19 0h3v2h-3zm-8 2.798L15.303 18H23v2h-8.303L12 18.202L9.303 20H1v-2h7.697z"></svg:path>`,
})
export class TdesignSunRisingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
