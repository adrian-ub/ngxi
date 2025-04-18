import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowFatLeftFillIcon],svg[ph-arrow-fat-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 88v80a16 16 0 0 1-16 16h-80v40a8 8 0 0 1-13.66 5.66l-96-96a8 8 0 0 1 0-11.32l96-96A8 8 0 0 1 128 32v40h80a16 16 0 0 1 16 16"></svg:path>`,
})
export class PhArrowFatLeftFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
