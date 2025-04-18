import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowUpLeftDuotoneIcon],svg[ph-arrow-elbow-up-left-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M96 32v96L48 80Z" opacity=".2"></svg:path><svg:path d="M192 72h-88V32a8 8 0 0 0-13.66-5.66l-48 48a8 8 0 0 0 0 11.32l48 48A8 8 0 0 0 104 128V88h80v136a8 8 0 0 0 16 0V80a8 8 0 0 0-8-8M88 108.69L59.31 80L88 51.31Z"></svg:path></svg:g>`,
})
export class PhArrowElbowUpLeftDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
