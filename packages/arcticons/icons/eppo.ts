import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEppoIcon],svg[arcticons-eppo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.443 21.796q-1.635 2.454 0 4.909h2.728v5.454h2.181l2.182-4.909H25.08v3.273h3.818l1.636-3.273c17.455-.545 17.455-5.454 0-6l-1.636-3.273H25.08v3.273H12.534l-2.182-4.91H8.17v5.455z"></svg:path>`,
})
export class ArcticonsEppoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
