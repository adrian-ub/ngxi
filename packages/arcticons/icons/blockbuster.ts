import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBlockbusterIcon],svg[arcticons-blockbuster-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4M24.835 24h-5.504"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.332 12.5h4.83a3.833 3.833 0 0 1 3.832 3.833v3.834A3.833 3.833 0 0 1 24.161 24h.674a3.833 3.833 0 0 1 3.833 3.833v3.834a3.833 3.833 0 0 1-3.833 3.833h-5.504m0-23v23"></svg:path>`,
})
export class ArcticonsBlockbusterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
