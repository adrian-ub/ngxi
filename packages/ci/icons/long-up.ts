import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciLongUpIcon],svg[ci-long-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13 5.83l2.59 2.58L17 7l-5-5l-5 5l1.41 1.41L11 5.83V22h2V5.83Z"></svg:path>`,
})
export class CiLongUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
