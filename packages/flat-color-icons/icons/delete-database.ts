import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsDeleteDatabaseIcon],svg[flat-color-icons-delete-database-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#D1C4E9" d="M38 7H10c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2m0 12H10c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2m0 12H10c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2"></svg:path><svg:circle cx="38" cy="38" r="10" fill="#F44336"></svg:circle><svg:g fill="#fff"><svg:path d="m43.31 41.181l-2.12 2.122l-8.485-8.484l2.121-2.122z"></svg:path><svg:path d="m34.819 43.31l-2.122-2.12l8.484-8.485l2.122 2.121z"></svg:path></svg:g>`,
})
export class FlatColorIconsDeleteDatabaseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
