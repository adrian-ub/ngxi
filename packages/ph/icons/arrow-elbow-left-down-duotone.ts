import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowLeftDownDuotoneIcon],svg[ph-arrow-elbow-left-down-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m136 168l-48 48l-48-48Z" opacity=".2"></svg:path><svg:path d="M232 64H88a8 8 0 0 0-8 8v88H40a8 8 0 0 0-5.66 13.66l48 48a8 8 0 0 0 11.32 0l48-48A8 8 0 0 0 136 160H96V80h136a8 8 0 0 0 0-16M88 204.69L59.31 176h57.38Z"></svg:path></svg:g>`,
})
export class PhArrowElbowLeftDownDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
