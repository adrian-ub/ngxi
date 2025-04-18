import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowDownRightFillIcon],svg[ph-arrow-down-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 88v104a8 8 0 0 1-8 8H88a8 8 0 0 1-5.66-13.66L128.69 140L58.34 69.66a8 8 0 0 1 11.32-11.32L140 128.69l46.34-46.35A8 8 0 0 1 200 88"></svg:path>`,
})
export class PhArrowDownRightFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
