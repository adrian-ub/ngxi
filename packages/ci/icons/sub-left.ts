import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciSubLeftIcon],svg[ci-sub-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 5v8H7.83l2.58-2.59L9 9l-5 5l5 5l1.41-1.41L7.83 15H20V5h-2Z"></svg:path>`,
})
export class CiSubLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
