import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciLongLeftIcon],svg[ci-long-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.83 11l2.58-2.59L7 7l-5 5l5 5l1.41-1.41L5.83 13H22v-2H5.83Z"></svg:path>`,
})
export class CiLongLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
