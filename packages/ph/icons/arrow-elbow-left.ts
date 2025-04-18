import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowLeftIcon],svg[ph-arrow-elbow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m237.66 101.66l-96 96a8 8 0 0 1-11.32 0L32 99.31V152a8 8 0 0 1-16 0V80a8 8 0 0 1 8-8h72a8 8 0 0 1 0 16H43.31L136 180.69l90.34-90.35a8 8 0 0 1 11.32 11.32"></svg:path>`,
})
export class PhArrowElbowLeftIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
