import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconGoodsOutlineIcon],svg[lsicon-goods-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M8 13.5H3a.5.5 0 0 1-.5-.5V8a.5.5 0 0 1 .5-.5h5m0 6v-6m0 6h5a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5H8m2.5.5v2m-2-7v2m-3 3v2m-1-7v4.5h7V3a.5.5 0 0 0-.5-.5H5a.5.5 0 0 0-.5.5Z"></svg:path>`,
})
export class LsiconGoodsOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
