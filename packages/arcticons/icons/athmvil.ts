import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAthmvilIcon],svg[arcticons-athmvil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m6.129 36.279l10.45 7.221V29.057zm10.451 0h17.094a6.077 6.077 0 0 0 6.076-6.077v-11.03m2.121-7.451L31.421 4.5v14.443zm-10.451 0H14.327a6.077 6.077 0 0 0-6.076 6.077v11.03"></svg:path>`,
})
export class ArcticonsAthmvilIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
