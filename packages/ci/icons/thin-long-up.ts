import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciThinLongUpIcon],svg[ci-thin-long-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 5.5L12 2L8.5 5.5l.707.707L11.5 3.914V22h1V3.914l2.293 2.293l.707-.707Z"></svg:path>`,
})
export class CiThinLongUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
