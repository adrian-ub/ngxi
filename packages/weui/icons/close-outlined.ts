import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[weuiCloseOutlinedIcon],svg[weui-close-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="weuiCloseOutlined0" fill="currentColor" d="M8 6.943L1.807.75L.75 1.807L6.943 8L.75 14.193l1.057 1.057L8 9.057l6.193 6.193l1.057-1.057L9.057 8l6.193-6.193L14.193.75z"></svg:path></svg:defs><svg:use fill-rule="evenodd" href="#weuiCloseOutlined0" transform="translate(4 4)"></svg:use>`,
})
export class WeuiCloseOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
