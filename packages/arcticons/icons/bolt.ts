import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBoltIcon],svg[arcticons-bolt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.9 31.2V16.8m0 0h6c2 0 3.6 1.6 3.6 3.6h0c0 2-1.6 3.6-3.6 3.6h-6"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.9 24h6c2 0 3.6 1.6 3.6 3.6h0c0 2-1.6 3.6-3.6 3.6h-6m15.5 0c-2 0-3.6-1.6-3.6-3.6v-2.2c0-2 1.6-3.6 3.6-3.6h0c2 0 3.6 1.6 3.6 3.6v2.2c0 2-1.6 3.6-3.6 3.6m10-12.4v10.6c0 1 .8 1.8 1.8 1.8h.7m-6.6-14.4v14.4m2.2-9.4h1.9m0 0h1.9"></svg:path><svg:circle cx="25.4" cy="33.3" r=".8" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path>`,
})
export class ArcticonsBoltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
