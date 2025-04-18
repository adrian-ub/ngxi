import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[weuiLinkFilledIcon],svg[weui-link-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m17.657 12l-1.414-1.414l2.121-2.122a2 2 0 1 0-2.828-2.828l-4.243 4.243a2 2 0 0 0 0 2.828l-1.414 1.414a4 4 0 0 1 0-5.657l4.242-4.242a4 4 0 0 1 5.657 5.657zM6.343 12l1.414 1.414l-2.121 2.122a2 2 0 1 0 2.828 2.828l4.243-4.243a2 2 0 0 0 0-2.828l1.414-1.414a4 4 0 0 1 0 5.657L9.88 19.778a4 4 0 1 1-5.657-5.657z"></svg:path>`,
})
export class WeuiLinkFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
