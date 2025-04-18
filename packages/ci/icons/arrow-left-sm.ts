import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciArrowLeftSmIcon],svg[ci-arrow-left-sm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 12H7m0 0l4 4m-4-4l4-4"></svg:path>`,
})
export class CiArrowLeftSmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
