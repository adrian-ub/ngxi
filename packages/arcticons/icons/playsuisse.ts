import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPlaysuisseIcon],svg[arcticons-playsuisse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.78 21.06h-7.17v-7.17h-5.88v7.17h-7.17v5.88h7.17v7.17h5.88v-7.17h7.17zM8.94 14.77l-4.16 4.16L9.85 24l-5.07 5.07l4.16 4.16L18.16 24z"></svg:path>`,
})
export class ArcticonsPlaysuisseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
