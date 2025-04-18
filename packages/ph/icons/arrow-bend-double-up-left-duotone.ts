import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowBendDoubleUpLeftDuotoneIcon],svg[ph-arrow-bend-double-up-left-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M128 56v96l-48-48Z" opacity=".2"></svg:path><svg:path d="M85.66 146.34a8 8 0 0 1-11.32 11.32l-48-48a8 8 0 0 1 0-11.32l48-48a8 8 0 0 1 11.32 11.32L43.31 104ZM232 200a8 8 0 0 1-16 0a88.11 88.11 0 0 0-80-87.63V152a8 8 0 0 1-13.66 5.66l-48-48a8 8 0 0 1 0-11.32l48-48A8 8 0 0 1 136 56v40.3A104.15 104.15 0 0 1 232 200M120 75.31L91.31 104L120 132.69Z"></svg:path></svg:g>`,
})
export class PhArrowBendDoubleUpLeftDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
