import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciArrowUpRightLgIcon],svg[ci-arrow-up-right-lg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.365 5.636h-7.071m7.07 0v7.071m0-7.07L5.638 18.363"></svg:path>`,
})
export class CiArrowUpRightLgIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
