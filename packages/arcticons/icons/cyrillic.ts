import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCyrillicIcon],svg[arcticons-cyrillic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.265 26.875v-8l5.3 8v-8m13.531-.015v8m5.3-8v8m-5.3-4.015h5.3m-15.666-1.27v6c0 1.105-.886 2-1.98 2h0q-.342-.001-.648-.11"></svg:path><svg:circle cx="18.731" cy="19.175" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.396 23.56a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v1.3a2 2 0 0 1-2 2h0a2 2 0 0 1-2-2M25.5 18.925l-3 10.15"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path>`,
})
export class ArcticonsCyrillicIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
