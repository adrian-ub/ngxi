import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMatrixIcon],svg[arcticons-matrix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.5 8.5h-8v31h8m23 0h8v-31h-8m-23 13.631a5.75 5.75 0 0 1 5.75-5.75h0a5.75 5.75 0 0 1 5.75 5.75v9.488M12.5 16.381v15.238M24 22.131a5.75 5.75 0 0 1 5.75-5.75h0a5.75 5.75 0 0 1 5.75 5.75v9.488"></svg:path>`,
})
export class ArcticonsMatrixIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
