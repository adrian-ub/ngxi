import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciArrowDownLeftLgIcon],svg[ci-arrow-down-left-lg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.636 18.364h7.07m-7.07 0v-7.071m0 7.07L18.364 5.637"></svg:path>`,
})
export class CiArrowDownLeftLgIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
