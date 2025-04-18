import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciArrowUpLgIcon],svg[ci-arrow-up-lg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3L7 8m5-5l5 5m-5-5v18"></svg:path>`,
})
export class CiArrowUpLgIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
