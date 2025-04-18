import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciShortLeftIcon],svg[ci-short-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.83 11l3.58-3.59L10 6l-6 6l6 6l1.41-1.41L7.83 13H20v-2H7.83Z"></svg:path>`,
})
export class CiShortLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
