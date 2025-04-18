import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciArrowSubDownLeftIcon],svg[ci-arrow-sub-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m11 11l-5 5m0 0l5 5m-5-5h7.803c1.118 0 1.677 0 2.105-.218a2 2 0 0 0 .874-.874c.218-.428.218-.987.218-2.105V3"></svg:path>`,
})
export class CiArrowSubDownLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
