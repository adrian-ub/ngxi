import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSplitwiseIcon],svg[arcticons-splitwise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 5.5l17.249 9.959V42.5H6.75V15.474Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.065 40.763a4.43 4.43 0 0 0 3.886 1.737h2.347a3.96 3.96 0 0 0 3.954-3.963h0a3.96 3.96 0 0 0-3.954-3.962h-2.593a3.96 3.96 0 0 1-3.954-3.963h0a3.96 3.96 0 0 1 3.954-3.962h2.347a4.43 4.43 0 0 1 3.886 1.736m24.311-12.927l-24.31 12.927M6.751 15.474L41.25 33.819"></svg:path>`,
})
export class ArcticonsSplitwiseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
