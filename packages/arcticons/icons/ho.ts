import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHoIcon],svg[arcticons-ho-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:rect width="6.85" height="9.076" x="19.65" y="29.424" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3.425" ry="3.425"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 24.801V38.5m0-5.65a3.425 3.425 0 0 1 3.425-3.426h0a3.425 3.425 0 0 1 3.425 3.425V38.5"></svg:path><svg:circle cx="29.009" cy="38.255" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsHoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
