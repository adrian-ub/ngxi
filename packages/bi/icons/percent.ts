import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[biPercentIcon],svg[bi-percent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.442 2.558a.625.625 0 0 1 0 .884l-10 10a.625.625 0 1 1-.884-.884l10-10a.625.625 0 0 1 .884 0M4.5 6a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m0 1a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m7 6a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m0 1a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"></svg:path>`,
})
export class BiPercentIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
