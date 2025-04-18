import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciShortRightIcon],svg[ci-short-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.17 13l-3.58 3.59L14 18l6-6l-6-6l-1.41 1.41L16.17 11H4v2h12.17Z"></svg:path>`,
})
export class CiShortRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
