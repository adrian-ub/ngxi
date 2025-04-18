import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowUpRightDuotoneIcon],svg[ph-arrow-elbow-up-right-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m216 80l-48 48V32Z" opacity=".2"></svg:path><svg:path d="m221.66 74.34l-48-48A8 8 0 0 0 160 32v40H72a8 8 0 0 0-8 8v144a8 8 0 0 0 16 0V88h80v40a8 8 0 0 0 13.66 5.66l48-48a8 8 0 0 0 0-11.32M176 108.69V51.31L204.69 80Z"></svg:path></svg:g>`,
})
export class PhArrowElbowUpRightDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
