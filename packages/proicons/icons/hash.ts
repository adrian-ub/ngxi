import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsHashIcon],svg[proicons-hash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.778 8.395H21.25m-18.5 7.21h17.472M6.282 21.13L9.495 2.87m5.01 18.26l3.212-18.26"></svg:path>`,
})
export class ProiconsHashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
