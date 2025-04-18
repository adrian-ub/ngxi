import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAegKitchenIcon],svg[arcticons-aeg-kitchen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.13 4.5v36.901c0 1.16.94 2.099 2.1 2.099h0a2.1 2.1 0 0 0 2.098-2.099V25.489h5.056zm-11.217 0v10.924M23.21 4.5v11.736a4.2 4.2 0 0 1-4.198 4.198v20.967c0 1.16-.94 2.099-2.099 2.099h0a2.1 2.1 0 0 1-2.099-2.099V20.434a4.2 4.2 0 0 1-4.198-4.198V4.5"></svg:path>`,
})
export class ArcticonsAegKitchenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
