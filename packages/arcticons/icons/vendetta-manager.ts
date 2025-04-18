import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsVendettaManagerIcon],svg[arcticons-vendetta-manager-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.015 14.527q1.232.05 2.455.216l.79-1.827a13 13 0 0 1 7.417 2.775a35.44 35.44 0 0 1 3.787 15.417s-2.214 3.787-8.049 3.953a38 38 0 0 1-2.26-3.012m-10.176-.013a39 39 0 0 1-2.3 3.025c-5.835-.166-8.049-3.953-8.049-3.953a35.44 35.44 0 0 1 3.803-15.432a13 13 0 0 1 7.416-2.752l.79 1.827q1.084-.15 2.173-.21m0 18.246c-3.595-.263-6.247-1.647-8.98-3.031m20.43 0c-2.8 1.418-5.516 2.836-9.247 3.048"></svg:path><svg:ellipse cx="19.013" cy="25.492" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.893" ry="1.977"></svg:ellipse><svg:ellipse cx="28.987" cy="25.492" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.893" ry="1.977"></svg:ellipse><svg:rect width="17.399" height="37" x="5.414" y="5.521" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2" ry="2"></svg:rect><svg:rect width="17.399" height="37" x="25.015" y="5.521" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2" ry="2"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.761 8.103h5"></svg:path><svg:circle cx="14.113" cy="8.103" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsVendettaManagerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
