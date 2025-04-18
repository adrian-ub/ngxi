import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowsLeftRightFillIcon],svg[ph-arrows-left-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M42.34 85.66a8 8 0 0 1 0-11.32l32-32A8 8 0 0 1 88 48v24h120a8 8 0 0 1 0 16H88v24a8 8 0 0 1-13.66 5.66Zm171.32 84.68l-32-32A8 8 0 0 0 168 144v24H48a8 8 0 0 0 0 16h120v24a8 8 0 0 0 13.66 5.66l32-32a8 8 0 0 0 0-11.32"></svg:path>`,
})
export class PhArrowsLeftRightFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
