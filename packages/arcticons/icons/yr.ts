import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsYrIcon],svg[arcticons-yr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.425 30.85v-13.7h4.484c2.536 0 4.591 2.06 4.591 4.601s-2.055 4.6-4.59 4.6h-4.485m4.484.001l4.485 4.494M21.35 23.4v4.025a3.425 3.425 0 0 1-3.425 3.424h0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.35 17.15v6.25a3.425 3.425 0 0 1-3.425 3.425h0a3.425 3.425 0 0 1-3.425-3.424v-6.25"></svg:path>`,
})
export class ArcticonsYrIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
