import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[weuiClipFilledIcon],svg[weui-clip-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16 18H7a1 1 0 0 1-1-1V8H3V6h3V3h2v3h9a1 1 0 0 1 1 1v9h3v2h-3v3h-2zm0-2V8H8v8z"></svg:path>`,
})
export class WeuiClipFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
