import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconVipOutlineIcon],svg[lsicon-vip-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m4 6l4 4.5L12 6m-4 7.5l6.5-7l-3.5-4H5l-3.5 4z"></svg:path>`,
})
export class LsiconVipOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
