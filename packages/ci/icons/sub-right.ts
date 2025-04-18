import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciSubRightIcon],svg[ci-sub-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 5v8h10.17l-2.58-2.59L15 9l5 5l-5 5l-1.41-1.41L16.17 15H4V5h2Z"></svg:path>`,
})
export class CiSubRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
