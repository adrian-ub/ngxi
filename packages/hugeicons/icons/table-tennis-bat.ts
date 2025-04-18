import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTableTennisBatIcon],svg[hugeicons-table-tennis-bat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m6 8l10 10m-13.512.187c1.784-1.122 4.511-2.8 4.912-4.502c.125-.53-.155-1.043-.398-1.53c-1.171-2.358-1.198-5.103.544-6.842c3.038-3.034 9.56-4.818 12.761-1.62c3.198 3.193 1.415 9.708-1.623 12.742c-1.742 1.74-4.49 1.714-6.85.544c-.488-.242-1.003-.523-1.533-.398c-1.705.401-3.386 3.124-4.51 4.905c-1.22 1.935-5.157-2.134-3.303-3.3" color="currentColor"></svg:path>`,
})
export class HugeiconsTableTennisBatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
