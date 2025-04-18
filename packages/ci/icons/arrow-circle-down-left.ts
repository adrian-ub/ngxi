import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciArrowCircleDownLeftIcon],svg[ci-arrow-circle-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 11v4m0 0h4m-4 0l6-6m6 3a9 9 0 1 0-18 0a9 9 0 0 0 18 0"></svg:path>`,
})
export class CiArrowCircleDownLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
