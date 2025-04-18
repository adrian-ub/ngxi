import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconTag24Icon],svg[octicon-tag-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.75 6.5a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5"></svg:path><svg:path fill="currentColor" d="M2.5 1h8.44a1.5 1.5 0 0 1 1.06.44l10.25 10.25a1.5 1.5 0 0 1 0 2.12l-8.44 8.44a1.5 1.5 0 0 1-2.12 0L1.44 12A1.5 1.5 0 0 1 1 10.94V2.5A1.5 1.5 0 0 1 2.5 1m0 1.5v8.44l10.25 10.25l8.44-8.44L10.94 2.5Z"></svg:path>`,
})
export class OcticonTag24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
