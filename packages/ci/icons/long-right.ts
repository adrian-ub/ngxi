import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciLongRightIcon],svg[ci-long-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.17 13l-2.58 2.59L17 17l5-5l-5-5l-1.41 1.41L18.17 11H2v2h16.17Z"></svg:path>`,
})
export class CiLongRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
