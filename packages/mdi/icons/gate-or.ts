import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiGateOrIcon],svg[mdi-gate-or-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4c3 6 3 10 0 16h6c5 0 11-4 14-8c-3-4-9-8-14-8zm3 2h3c3.5 0 8.3 3 11.3 6c-3 3-7.8 6-11.3 6H5c1.4-4.1 1.4-7.9 0-12"></svg:path>`,
})
export class MdiGateOrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
