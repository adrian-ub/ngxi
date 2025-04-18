import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phLineSegmentDuotoneIcon],svg[ph-line-segment-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M81 175a24 24 0 1 1-34 0a24 24 0 0 1 34 0M209 47a24 24 0 1 0 0 34a24 24 0 0 0 0-34" opacity=".2"></svg:path><svg:path d="M214.64 41.36a32 32 0 0 0-50.2 38.89l-84.19 84.19a32.06 32.06 0 0 0-38.89 4.94a32 32 0 1 0 50.2 6.37l84.19-84.19a32 32 0 0 0 38.89-50.2m-139.33 162a16 16 0 0 1-22.64-22.64a16 16 0 0 1 22.63 0a16 16 0 0 1 .01 22.61Zm128-128a16 16 0 1 1 0-22.63a16 16 0 0 1 .02 22.57Z"></svg:path></svg:g>`,
})
export class PhLineSegmentDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
