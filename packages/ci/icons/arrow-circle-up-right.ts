import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciArrowCircleUpRightIcon],svg[ci-arrow-circle-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13V9m0 0h-4m4 0l-6 6m12-3a9 9 0 1 0-18 0a9 9 0 0 0 18 0"></svg:path>`,
})
export class CiArrowCircleUpRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
