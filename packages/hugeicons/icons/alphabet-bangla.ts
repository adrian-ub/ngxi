import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAlphabetBanglaIcon],svg[hugeicons-alphabet-bangla-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14.74 12.78c1.033-.03 3.11 1.338 3.256 7.053m-8.063-9.068c-.081-.701-.057-2.214 1.295-2.96c1.768-.973 3.585.66 3.793 2.468c.101.886-.256 3.719-1.765 5.416c-.563.634-1.071 1.188-2.028 1.286c-.888.09-1.616-.147-2.46-.704c-1.348-.89-2.758-2.39-3.953-4.463C3.537 9.594 2.847 8.08 2.002 5.026"></svg:path><svg:path d="M6.997 6.368c.878-.956 5.994-4.679 9.599-.23c.436.538.655.808 1.028 1.861c.373 1.054.373 1.786.373 3.25V20m0-10c0-2.273 1.2-5.374 4-4.963"></svg:path></svg:g>`,
})
export class HugeiconsAlphabetBanglaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
