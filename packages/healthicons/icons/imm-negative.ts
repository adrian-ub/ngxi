import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsImmNegativeIcon],svg[healthicons-imm-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsImmNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zm-6 24c0 9.941-8.059 18-18 18S6 33.941 6 24S14.059 6 24 6s18 8.059 18 18m2 0c0 11.046-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4s20 8.954 20 20m-20 7a7 7 0 1 0 0-14a7 7 0 0 0 0 14m0 2a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-1.5-4a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7m-8-18a3.5 3.5 0 1 1 0 7a3.5 3.5 0 0 1 0-7m21 24a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7M31 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 2a3 3 0 1 0 0-6a3 3 0 0 0 0 6M14 32a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2 0a3 3 0 1 1-6 0a3 3 0 0 1 6 0" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsImmNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsImmNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
