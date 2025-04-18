import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowDownRightThinIcon],svg[ph-arrow-down-right-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196 88v104a4 4 0 0 1-4 4H88a4 4 0 0 1 0-8h94.34L61.17 66.83a4 4 0 0 1 5.66-5.66L188 182.34V88a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhArrowDownRightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
