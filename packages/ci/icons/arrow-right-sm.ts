import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciArrowRightSmIcon],svg[ci-arrow-right-sm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12h10m0 0l-4-4m4 4l-4 4"></svg:path>`,
})
export class CiArrowRightSmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
