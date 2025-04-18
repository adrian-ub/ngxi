import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsQuoteunquoteIcon],svg[arcticons-quoteunquote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13 29.75c2.21 0 4-2.686 4-6h-4v-9.5h8.7v9.5c0 5.523-3.895 10-8.7 10Zm13.3 0c2.21 0 4-2.686 4-6h-4v-9.5H35v9.5c0 5.523-3.895 10-8.7 10Z"></svg:path>`,
})
export class ArcticonsQuoteunquoteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
