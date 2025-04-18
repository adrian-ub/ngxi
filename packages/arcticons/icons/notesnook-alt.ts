import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNotesnookAltIcon],svg[arcticons-notesnook-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 2.5v29.575m0 0L7.167 37.374M24 32.075l16.833 5.299m-13.644-7.497l10.781 3.394m-10.781-6.08l8.277 2.606m-8.277-5.292l10.781 3.394m-17.535-8.7v10.816l-7.248-8.534v10.79"></svg:path>`,
})
export class ArcticonsNotesnookAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
