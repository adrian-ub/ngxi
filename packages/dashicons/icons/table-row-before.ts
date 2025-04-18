import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsTableRowBeforeIcon],svg[dashicons-table-row-before-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.656 6.464h2.88v2.88h1.408v-2.88h2.88V5.12h-2.88V2.24H9.536v2.88h-2.88zM0 17.92V0h20.48v17.92zm7.68-2.56h5.12v-3.84H7.68zm-6.4 0H6.4v-3.84H1.28zM19.2 1.28H1.28v9.024H19.2zm0 10.24h-5.12v3.84h5.12z"></svg:path>`,
})
export class DashiconsTableRowBeforeIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
