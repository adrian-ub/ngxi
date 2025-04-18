import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciThinLongLeftIcon],svg[ci-thin-long-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 8.5L2 12l3.5 3.5l.707-.707L3.914 12.5H22v-1H3.914l2.293-2.293L5.5 8.5Z"></svg:path>`,
})
export class CiThinLongLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
