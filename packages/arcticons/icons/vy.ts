import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsVyIcon],svg[arcticons-vy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m23.67 15.546l-5.431 16.806L12.5 15.546m23 6.968v5.739c0 2.357-1.947 4.202-4.202 4.202h0c-1.23 0-2.357-.41-2.971-1.23"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.5 15.546v6.968c0 2.357-1.947 4.202-4.202 4.202h0c-2.357 0-4.201-1.947-4.201-4.202v-6.969"></svg:path>`,
})
export class ArcticonsVyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
