import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEleMeIcon],svg[arcticons-ele-me-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.773 39.845a18.5 18.5 0 0 1-9.702 2.731C13.811 42.576 5.495 34.26 5.495 24S13.812 5.424 24.07 5.424c6.222 0 11.73 3.059 15.1 7.755L21.774 25.076m20.731 1.234a19 19 0 0 1-.435 2.302"></svg:path>`,
})
export class ArcticonsEleMeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
