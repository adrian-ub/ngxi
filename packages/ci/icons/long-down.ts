import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciLongDownIcon],svg[ci-long-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11 18.17l-2.59-2.58L7 17l5 5l5-5l-1.41-1.41L13 18.17V2h-2v16.17Z"></svg:path>`,
})
export class CiLongDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
