import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsChemistry01Icon],svg[hugeicons-chemistry-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3 9h8m9 0h-3m0-5v10.786C17 16.56 15.657 18 14 18s-3-1.44-3-3.214V4"></svg:path><svg:path d="M5 3v10c0 3.771 0 5.657 1.172 6.828S9.229 21 13 21h8M10 4h8"></svg:path></svg:g>`,
})
export class HugeiconsChemistry01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
