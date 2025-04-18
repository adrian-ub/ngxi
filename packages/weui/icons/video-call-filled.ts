import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[weuiVideoCallFilledIcon],svg[weui-video-call-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 5.5h13a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1M18 10l3.375-2.7A1 1 0 0 1 23 8.08v7.84a1 1 0 0 1-1.625.78L18 14z"></svg:path>`,
})
export class WeuiVideoCallFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
