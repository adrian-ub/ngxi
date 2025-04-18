import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconGoodsFilledIcon],svg[lsicon-goods-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v4H4zm4 2V3h1v2z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M2 8v5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V8h-3v2h-1V8H6v2H5V8z"></svg:path>`,
})
export class LsiconGoodsFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
