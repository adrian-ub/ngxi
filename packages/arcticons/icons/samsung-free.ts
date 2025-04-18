import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSamsungFreeIcon],svg[arcticons-samsung-free-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.7 28.7h4.7m-4.7-9.4h4.7M25.7 24h4.7m2.4 4.7h4.7m-4.7-9.4h4.7M32.8 24h4.7m-27-4.7h4.7M10.5 24h3.1m-3.1-4.7v9.4m6.9 0v-9.4h3.1c1.7 0 3.2 1.4 3.2 3.2s-1.4 3.2-3.2 3.2h-3.1m3.1-.1l3 3.1"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29c-2.2 0-4 1.8-4 4v29c0 2.2 1.8 4 4 4h29c2.2 0 4-1.8 4-4v-29c0-2.2-1.8-4-4-4"></svg:path>`,
})
export class ArcticonsSamsungFreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
