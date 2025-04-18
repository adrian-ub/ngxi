import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciArrowDownRightLgIcon],svg[ci-arrow-down-right-lg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364v-7.071m0 7.071h-7.071m7.07 0L5.637 5.636"></svg:path>`,
})
export class CiArrowDownRightLgIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
