import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconGoodsSearchFilledIcon],svg[lsicon-goods-search-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 9a1 1 0 1 1 2 0a1 1 0 0 1-2 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11.207 2H4.793L2 4.793V14h12V4.793zm-7.5 2.5l1.5-1.5h5.586l1.5 1.5zM8 7a2 2 0 1 0 1.016 3.723l1.13 1.13l.708-.707l-1.13-1.13A2 2 0 0 0 8 7" clip-rule="evenodd"></svg:path>`,
})
export class LsiconGoodsSearchFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
