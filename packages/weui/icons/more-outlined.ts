import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[weuiMoreOutlinedIcon],svg[weui-more-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.75 12a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0M12 10.25a1.75 1.75 0 1 1 0 3.5a1.75 1.75 0 0 1 0-3.5m7 0a1.75 1.75 0 1 1 0 3.5a1.75 1.75 0 0 1 0-3.5"></svg:path>`,
})
export class WeuiMoreOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
