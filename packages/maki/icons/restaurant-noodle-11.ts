import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiRestaurantNoodle11Icon],svg[maki-restaurant-noodle-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M3.469 8.81L1 6.625V6h9v.625l-2.484 2.2zm-.476-7.096a.332.332 0 0 0-.664 0v.88l-1.098.24a.25.25 0 0 0 .092.491l1.006-.177v.432l-1.079.022a.25.25 0 1 0 0 .5l1.079.022v1.2h.664zM9.5 3.352l-.491.193l-4.177.046v-.926l4.055-.788l.519.114a.5.5 0 1 0-.186-.982l-.445.271l-3.943.847v-.413a.332.332 0 0 0-.664 0v.557l-.626.137v.479l.626-.11v.82l-.626.013v.486l5.456.04l.502.216a.5.5 0 1 0 0-1zM7.531 9.743H3.453v.245h4.078z" fill="currentColor"></svg:path>`,
})
export class MakiRestaurantNoodle11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
