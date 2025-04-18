import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSword01Icon],svg[hugeicons-sword-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.5 19.5a2.36 2.36 0 0 1 1.33.67c.375.374.598.843.67 1.33M8 16l-4 4m5-3.5l10.854-8.573a2 2 0 0 0 .639-1.062L21.5 2.5l-4.365 1.007a2 2 0 0 0-1.062.64L7.5 15M4 13h.572a2 2 0 0 1 1.414.586l4.428 4.428A2 2 0 0 1 11 19.428V20" color="currentColor"></svg:path>`,
})
export class HugeiconsSword01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
