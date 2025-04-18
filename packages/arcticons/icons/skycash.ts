import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSkycashIcon],svg[arcticons-skycash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.88 20.574h-5.454a6 6 0 0 1-6-6V9.12a3.56 3.56 0 0 0-2.812-3.567a3.43 3.43 0 0 0-4.04 3.373v5.648a6 6 0 0 1-6 6H9.12a3.647 3.647 0 0 0-3.615 3.242a3.426 3.426 0 0 0 3.42 3.61h5.65a6 6 0 0 1 6 6v5.454a3.647 3.647 0 0 0 3.24 3.615a3.426 3.426 0 0 0 3.61-3.421v-5.648a6 6 0 0 1 6-6h5.649a3.426 3.426 0 0 0 3.421-3.61a3.647 3.647 0 0 0-3.615-3.242"></svg:path>`,
})
export class ArcticonsSkycashIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
