import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciThinBigRightIcon],svg[ci-thin-big-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 18.5L24 12l-6.5-6.5l-.707.707l5.293 5.293H0v1h22.086l-5.293 5.293l.707.707Z"></svg:path>`,
})
export class CiThinBigRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
