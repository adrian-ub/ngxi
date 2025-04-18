import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCoins01Icon],svg[hugeicons-coins-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:ellipse cx="15.5" cy="11" rx="6.5" ry="2"></svg:ellipse><svg:path d="M22 15.5c0 1.105-2.91 2-6.5 2s-6.5-.895-6.5-2"></svg:path><svg:path d="M22 11v8.8c0 1.215-2.91 2.2-6.5 2.2S9 21.015 9 19.8V11"></svg:path><svg:ellipse cx="8.5" cy="4" rx="6.5" ry="2"></svg:ellipse><svg:path d="M6 11c-1.892-.23-3.63-.825-4-2m4 7c-1.892-.23-3.63-.825-4-2"></svg:path><svg:path d="M6 21c-1.892-.23-3.63-.826-4-2V4m13 2V4"></svg:path></svg:g>`,
})
export class HugeiconsCoins01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
