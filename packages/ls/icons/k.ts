import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsKIcon],svg[ls-k-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M411 228L137 466l319 288H349L81 513l-9 9v232H0V0h72v426l229-198z"></svg:path>`,
})
export class LsKIcon {
  readonly viewBox = input("0 0 456 754")
  readonly width = input("0.61em")
  readonly height = input("1em")
}
