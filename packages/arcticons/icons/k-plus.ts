import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKPlusIcon],svg[arcticons-k-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 13.106h5.326v21.728H4.5zm10.824 6.852l11.57 15.157h-4.286c-1.776 0-2.69-1.172-3.631-2.416l-6.725-8.89zl3.653-4.657c.94-1.244 1.855-2.416 3.63-2.416h4.286L18.448 24.05m18.776-1.872V34.73m-6.276-6.276H43.5"></svg:path>`,
})
export class ArcticonsKPlusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
