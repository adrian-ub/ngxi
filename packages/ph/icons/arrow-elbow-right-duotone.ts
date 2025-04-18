import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowElbowRightDuotoneIcon],svg[ph-arrow-elbow-right-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 80v72l-72-72Z" opacity=".2"></svg:path><svg:path d="M232 72h-72a8 8 0 0 0-5.66 13.66L184.69 116L120 180.69L29.66 90.34a8 8 0 0 0-11.32 11.32l96 96a8 8 0 0 0 11.32 0L196 127.31l30.34 30.35A8 8 0 0 0 240 152V80a8 8 0 0 0-8-8m-8 60.69L179.31 88H224Z"></svg:path></svg:g>`,
})
export class PhArrowElbowRightDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
