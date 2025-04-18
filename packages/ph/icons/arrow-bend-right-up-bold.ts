import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowBendRightUpBoldIcon],svg[ph-arrow-bend-right-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208.49 88.49a12 12 0 0 1-17 0L164 61v67A108.12 108.12 0 0 1 56 236a12 12 0 0 1 0-24a84.09 84.09 0 0 0 84-84V61l-27.51 27.49a12 12 0 0 1-17-17l48-48a12 12 0 0 1 17 0l48 48a12 12 0 0 1 0 17"></svg:path>`,
})
export class PhArrowBendRightUpBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
