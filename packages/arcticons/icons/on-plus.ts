import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOnPlusIcon],svg[arcticons-on-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4m-2.621 27.965v5.622m-2.813-2.811h5.622M16.517 15.453v6.15"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.1 18.413a6.95 6.95 0 0 1 3.248 5.898h0c0 3.826-3.059 6.926-6.83 6.926h0c-3.772 0-6.83-3.1-6.83-6.926a6.95 6.95 0 0 1 3.27-5.912M25.833 31.26V19.996c0-2.073 3.353-2.749 4.19-.47l3.784 10.302c.837 2.278 4.19 1.603 4.19-.471V18.096"></svg:path>`,
})
export class ArcticonsOnPlusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
