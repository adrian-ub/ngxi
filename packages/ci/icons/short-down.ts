import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciShortDownIcon],svg[ci-short-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11 16.17l-3.59-3.58L6 14l6 6l6-6l-1.41-1.41L13 16.17V4h-2v12.17Z"></svg:path>`,
})
export class CiShortDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
