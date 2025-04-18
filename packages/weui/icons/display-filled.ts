import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[weuiDisplayFilledIcon],svg[weui-display-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 5a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm6 16.05c0-.414.344-.75.753-.75h6.494a.75.75 0 0 1 .753.75v.75H8z"></svg:path>`,
})
export class WeuiDisplayFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
