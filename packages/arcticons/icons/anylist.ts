import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAnylistIcon],svg[arcticons-anylist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="21.33" height="33.044" x="13.335" y="7.478" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3.532" ry="3.532"></svg:rect><svg:rect width="13.278" height="3.581" x="17.361" y="14.638" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.369" ry="3.532"></svg:rect><svg:rect width="13.278" height="3.581" x="17.361" y="21.421" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.369" ry="3.532"></svg:rect><svg:rect width="13.278" height="3.581" x="17.361" y="28.596" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.369" ry="3.532"></svg:rect>`,
})
export class ArcticonsAnylistIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
