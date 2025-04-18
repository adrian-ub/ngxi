import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsTableRowAfterIcon],svg[dashicons-table-row-after-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.824 10.176h-2.88v-2.88H9.536v2.88h-2.88v1.344h2.88v2.88h1.408v-2.88h2.88zM0 17.92V0h20.48v17.92zM6.4 1.28H1.28v3.84H6.4zm6.4 0H7.68v3.84h5.12zm6.4 0h-5.12v3.84h5.12zm0 5.056H1.28v9.024H19.2z"></svg:path>`,
})
export class DashiconsTableRowAfterIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
