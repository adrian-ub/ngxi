import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneDiamondIcon],svg[ic-twotone-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.88 5H6.24l-1.5 3h2.64zm10.38 3l-1.5-3h-2.64l1.5 3zM11 16.68V10H5.44zm2 0L18.56 10H13zM12.88 5h-1.76l-1.5 3h4.76z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M19 3H5L2 9l10 12L22 9zm-1.24 2l1.5 3h-2.65l-1.5-3zM6.24 5h2.65l-1.5 3H4.74zM11 16.68L5.44 10H11zM9.62 8l1.5-3h1.76l1.5 3zM13 16.68V10h5.56z"></svg:path>`,
})
export class IcTwotoneDiamondIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
