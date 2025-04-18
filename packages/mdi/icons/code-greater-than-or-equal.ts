import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCodeGreaterThanOrEqualIcon],svg[mdi-code-greater-than-or-equal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 13h5v2h-5m0-6h5v2h-5M6.91 7.41L11.5 12l-4.59 4.6l-1.41-1.42L8.68 12L5.5 8.82M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"></svg:path>`,
})
export class MdiCodeGreaterThanOrEqualIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
