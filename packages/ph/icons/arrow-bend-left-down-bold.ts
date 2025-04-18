import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowBendLeftDownBoldIcon],svg[ph-arrow-bend-left-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 32a12 12 0 0 1-12 12a84.09 84.09 0 0 0-84 84v67l27.51-27.52a12 12 0 0 1 17 17l-48 48a12 12 0 0 1-17 0l-48-48a12 12 0 0 1 17-17L92 195v-67A108.12 108.12 0 0 1 200 20a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhArrowBendLeftDownBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
