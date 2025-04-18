import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[weuiTvFilledIcon],svg[weui-tv-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.218 7.954H6.3V9.17h2.036V15h1.475V9.17h1.816l1.96 5.83h1.776l2.369-7.046h-1.607l-1.611 5.527h-.034l-1.612-5.527zM2 5a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm6 16.05c0-.414.344-.75.753-.75h6.494a.75.75 0 0 1 .753.75v.75H8z"></svg:path>`,
})
export class WeuiTvFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
