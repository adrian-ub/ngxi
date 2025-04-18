import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSymbolabIcon],svg[arcticons-symbolab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36 25.38v5.732a4.246 4.246 0 0 1-4.246 4.246h0a4.23 4.23 0 0 1-3.003-1.243"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36 18.374v7.006a4.246 4.246 0 0 1-4.246 4.246h0a4.246 4.246 0 0 1-4.246-4.246v-7.006m-15.172 9.391c1.042 1.356 2.348 1.861 4.165 1.861h2.514a4.24 4.24 0 0 0 4.237-4.246h0a4.24 4.24 0 0 0-4.237-4.246h-2.778A4.24 4.24 0 0 1 12 16.888h0a4.24 4.24 0 0 1 4.237-4.247h2.514c1.817 0 3.123.505 4.165 1.861"></svg:path>`,
})
export class ArcticonsSymbolabIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
