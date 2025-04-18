import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowArcRightFillIcon],svg[ph-arrow-arc-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 88v64a8 8 0 0 1-8 8h-64a8 8 0 0 1-5.66-13.66l26.19-26.18A88 88 0 0 0 40 184a8 8 0 0 1-16 0a104 104 0 0 1 175.86-75.18l26.48-26.48A8 8 0 0 1 240 88"></svg:path>`,
})
export class PhArrowArcRightFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
