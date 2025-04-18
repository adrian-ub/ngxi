import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciThinLongRightIcon],svg[ci-thin-long-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 15.5L22 12l-3.5-3.5l-.707.707l2.293 2.293H2v1h18.086l-2.293 2.293l.707.707Z"></svg:path>`,
})
export class CiThinLongRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
