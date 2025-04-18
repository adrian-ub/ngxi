import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsBulletListIcon],svg[proicons-bullet-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="4.443" cy="5.081" r="1.331" fill="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.123 5.08h11.765"></svg:path><svg:circle cx="4.443" cy="12" r="1.331" fill="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.123 12h11.765"></svg:path><svg:circle cx="4.443" cy="18.919" r="1.331" fill="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.123 18.92h11.765"></svg:path></svg:g>`,
})
export class ProiconsBulletListIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
