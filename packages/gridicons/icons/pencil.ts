import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsPencilIcon],svg[gridicons-pencil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13 6l5 5l-9.507 9.507a1.766 1.766 0 0 1-.012-2.485l-.003-.003a1.763 1.763 0 0 1-2.521-2.467l-.008-.008a1.765 1.765 0 0 1-2.455-.036zm7.586-.414l-2.172-2.172a2 2 0 0 0-2.828 0L14 5l5 5l1.586-1.586a2 2 0 0 0 0-2.828M3 18v3h3a3 3 0 0 0-3-3"></svg:path>`,
})
export class GridiconsPencilIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
