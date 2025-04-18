import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsDeleteRowIcon],svg[flat-color-icons-delete-row-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#90CAF9" d="M43 30V18c0-2.2-1.8-4-4-4H9c-2.2 0-4 1.8-4 4v12c0 2.2 1.8 4 4 4h30c2.2 0 4-1.8 4-4M9 18h30v12H9z"></svg:path><svg:circle cx="38" cy="38" r="10" fill="#F44336"></svg:circle><svg:g fill="#fff"><svg:path d="m43.31 41.181l-2.12 2.122l-8.485-8.484l2.121-2.122z"></svg:path><svg:path d="m34.819 43.31l-2.122-2.12l8.484-8.485l2.122 2.121z"></svg:path></svg:g>`,
})
export class FlatColorIconsDeleteRowIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
