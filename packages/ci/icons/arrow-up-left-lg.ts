import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciArrowUpLeftLgIcon],svg[ci-arrow-up-left-lg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.636 5.636v7.07m0-7.07h7.07m-7.07 0l12.728 12.728"></svg:path>`,
})
export class CiArrowUpLeftLgIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
