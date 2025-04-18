import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciShortUpIcon],svg[ci-short-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13 7.83l3.59 3.58L18 10l-6-6l-6 6l1.41 1.41L11 7.83V20h2V7.83Z"></svg:path>`,
})
export class CiShortUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
