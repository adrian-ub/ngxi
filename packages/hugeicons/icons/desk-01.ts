import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDesk01Icon],svg[hugeicons-desk-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 4H2m19 4H3m18 4h-7m0-4v10c0 .943 0 1.414.293 1.707S15.057 20 16 20h3c.943 0 1.414 0 1.707-.293S21 18.943 21 18V8M3 4v16M21 4v4" color="currentColor"></svg:path>`,
})
export class HugeiconsDesk01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
