import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[weuiAdd2OutlinedIcon],svg[weui-add2-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.4 11.4V7h1.2v4.4H17v1.2h-4.4V17h-1.2v-4.4H7v-1.2zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-1.2a8.8 8.8 0 1 0 0-17.6a8.8 8.8 0 0 0 0 17.6"></svg:path>`,
})
export class WeuiAdd2OutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
