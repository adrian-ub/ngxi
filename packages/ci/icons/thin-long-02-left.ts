import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciThinLong02LeftIcon],svg[ci-thin-long-02-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8 9l-3 3l3 3l.707-.707L6.914 12.5H19v-1H6.914l1.793-1.793L8 9Z"></svg:path>`,
})
export class CiThinLong02LeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
