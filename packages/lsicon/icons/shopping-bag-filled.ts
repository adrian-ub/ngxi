import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconShoppingBagFilledIcon],svg[lsicon-shopping-bag-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 1a3 3 0 0 0-3 3H3.5a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H11a3 3 0 0 0-3-3m0 1a2 2 0 0 0-2 2h4a2 2 0 0 0-2-2M6 5H5v2h1zm5 0h-1v2h1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconShoppingBagFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
