import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowBendDoubleUpRightDuotoneIcon],svg[ph-arrow-bend-double-up-right-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m176 104l-48 48V56Z" opacity=".2"></svg:path><svg:path d="m229.66 109.66l-48 48a8 8 0 0 1-11.32-11.32L212.69 104l-42.35-42.34a8 8 0 0 1 11.32-11.32l48 48a8 8 0 0 1 0 11.32m-48 0l-48 48A8 8 0 0 1 120 152v-39.63A88.11 88.11 0 0 0 40 200a8 8 0 0 1-16 0a104.15 104.15 0 0 1 96-103.7V56a8 8 0 0 1 13.66-5.66l48 48a8 8 0 0 1 0 11.32m-17-5.66L136 75.31v57.38Z"></svg:path></svg:g>`,
})
export class PhArrowBendDoubleUpRightDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
