import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsTargetIcon],svg[radix-icons-target-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.9 7.5a6.6 6.6 0 1 1 13.2 0a6.6 6.6 0 0 1-13.2 0m6.6-5.7a5.7 5.7 0 1 0 0 11.4a5.7 5.7 0 0 0 0-11.4M3.075 7.5a4.425 4.425 0 1 1 8.85 0a4.425 4.425 0 0 1-8.85 0M7.5 3.925a3.575 3.575 0 1 0 0 7.15a3.575 3.575 0 0 0 0-7.15m0 1.325a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5M6.05 7.5a1.45 1.45 0 1 1 2.9 0a1.45 1.45 0 0 1-2.9 0" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsTargetIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
