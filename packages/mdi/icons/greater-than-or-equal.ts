import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiGreaterThanOrEqualIcon],svg[mdi-greater-than-or-equal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 2.27L20 10.14L6.5 18l-1-1.73l10.53-6.13L5.5 4zM20 20v2H5v-2z"></svg:path>`,
})
export class MdiGreaterThanOrEqualIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
