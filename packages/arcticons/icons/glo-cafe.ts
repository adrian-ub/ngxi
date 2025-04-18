import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGloCafeIcon],svg[arcticons-glo-cafe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.378 20.037v8.972A2.99 2.99 0 0 1 17.388 32h0a2.98 2.98 0 0 1-2.115-.876"></svg:path><svg:rect width="5.981" height="7.925" x="14.397" y="20.037" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.991" ry="2.991" transform="rotate(180 17.388 24)"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.543 16v10.467c0 .826.67 1.496 1.495 1.496h.449m2.135-4.935a2.99 2.99 0 1 1 5.981 0v1.944a2.99 2.99 0 1 1-5.981 0z"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsGloCafeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
