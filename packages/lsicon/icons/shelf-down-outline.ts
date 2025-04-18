import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconShelfDownOutlineIcon],svg[lsicon-shelf-down-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M13.5 5v8.5h-11V5m11 0L11 2.5H5L2.5 5m11 0h-11M8 7v4.5m0 0l2-2m-2 2l-2-2"></svg:path>`,
})
export class LsiconShelfDownOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
