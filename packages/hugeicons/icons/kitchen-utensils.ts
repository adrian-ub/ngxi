import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsKitchenUtensilsIcon],svg[hugeicons-kitchen-utensils-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.983 14V3m0 11c-1.658 0-3.003 1.435-3.003 2.625c0 1.75 1.345 4.375 3.003 4.375s3.003-2.625 3.003-4.375c0-1.19-1.345-2.625-3.003-2.625m-7.004-3.972V21M3.686 3.13l-.782.077a1 1 0 0 0-.89 1.148l.669 4.316c.113.731.743 1.34 1.484 1.34H5.79c.74 0 1.37-.609 1.484-1.34l.67-4.316a1 1 0 0 0-.89-1.148l-.78-.078a13 13 0 0 0-2.588 0m14.31 10.689V3.026c1.159.32 3.086 1.527 3.405 4.502l.573 4.514c.1.793-.101 1.584-.89 1.72c-.66.113-1.661.15-3.088.056m0 0V21" color="currentColor"></svg:path>`,
})
export class HugeiconsKitchenUtensilsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
