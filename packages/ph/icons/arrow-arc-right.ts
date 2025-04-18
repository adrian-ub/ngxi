import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowArcRightIcon],svg[ph-arrow-arc-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 88v64a8 8 0 0 1-8 8h-64a8 8 0 0 1 0-16h44.6l-22.36-22.21A88 88 0 0 0 40 184a8 8 0 0 1-16 0a104 104 0 0 1 177.54-73.54L224 132.77V88a8 8 0 0 1 16 0"></svg:path>`,
})
export class PhArrowArcRightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
