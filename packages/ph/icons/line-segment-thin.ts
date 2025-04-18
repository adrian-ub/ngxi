import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phLineSegmentThinIcon],svg[ph-line-segment-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M211.81 44.19a28 28 0 0 0-42.23 36.57l-88.82 88.82a28 28 0 0 0-36.57 2.63a28 28 0 1 0 42.23 3l88.82-88.82a28 28 0 0 0 36.57-42.23Zm-133.67 162a20 20 0 1 1 0-28.28a20 20 0 0 1 0 28.24Zm128-128a20 20 0 0 1-28.28 0a20 20 0 1 1 28.28 0"></svg:path>`,
})
export class PhLineSegmentThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
