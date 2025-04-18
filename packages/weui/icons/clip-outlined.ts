import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[weuiClipOutlinedIcon],svg[weui-clip-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.2 7.2v9.6h9.6V7.2zM6 7.2H3V6h3V3h1.2v3H17a1 1 0 0 1 1 1v9.8h3V18h-3v3h-1.2v-3H7a1 1 0 0 1-1-1z"></svg:path>`,
})
export class WeuiClipOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
