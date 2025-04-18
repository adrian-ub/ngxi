import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowArcRightThinIcon],svg[ph-arrow-arc-right-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 88v64a4 4 0 0 1-4 4h-64a4 4 0 0 1 0-8h54.3l-29.24-29A92 92 0 0 0 36 184a4 4 0 0 1-8 0a100 100 0 0 1 170.71-70.71l29.29 29.1V88a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhArrowArcRightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
