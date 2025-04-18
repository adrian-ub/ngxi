import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowRightUpDuotoneIcon],svg[ph-arrow-elbow-right-up-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 96h-96l48-48Z" opacity=".2"></svg:path><svg:path d="m221.66 90.34l-48-48a8 8 0 0 0-11.32 0l-48 48A8 8 0 0 0 120 104h40v80H24a8 8 0 0 0 0 16h144a8 8 0 0 0 8-8v-88h40a8 8 0 0 0 5.66-13.66M139.31 88L168 59.31L196.69 88Z"></svg:path></svg:g>`,
})
export class PhArrowElbowRightUpDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
