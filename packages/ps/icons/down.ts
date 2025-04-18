import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psDownIcon],svg[ps-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m192 284l186-162q15-17 2-30q-17-17-30-2L192 228L36 90Q23 75 6 92q-14 14 3 30z"></svg:path>`,
})
export class PsDownIcon {
  readonly viewBox = input("0 0 392 448")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
