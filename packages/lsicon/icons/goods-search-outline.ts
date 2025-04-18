import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconGoodsSearchOutlineIcon],svg[lsicon-goods-search-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M13.5 5v8.5h-11V5m11 0L11 2.5H5L2.5 5m11 0h-11M9 10l1.5 1.5M9.5 9a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Z"></svg:path>`,
})
export class LsiconGoodsSearchOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
