import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[weuiDoneOutlinedIcon],svg[weui-done-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m8.864 16.617l-5.303-5.303l-1.061 1.06l5.657 5.657a1 1 0 0 0 1.414 0L21.238 6.364l-1.06-1.06L8.864 16.616z"></svg:path>`,
})
export class WeuiDoneOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
