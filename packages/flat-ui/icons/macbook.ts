import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatUiMacbookIcon],svg[flat-ui-macbook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2C3E50" fill-rule="evenodd" d="M10 62V5a5 5 0 0 1 5-5h70a5 5 0 0 1 5 5v57z" clip-rule="evenodd"></svg:path><svg:path fill="#35495E" fill-rule="evenodd" d="M14 4h72v54H14z" clip-rule="evenodd"></svg:path><svg:path fill="#BDC3C7" fill-rule="evenodd" d="M0 62h100v3c0 2.209-2.791 3-5 3H5c-2.209 0-5-.791-5-3z" clip-rule="evenodd"></svg:path><svg:path fill="#95A5A5" fill-rule="evenodd" d="M59.95 62a2.5 2.5 0 0 1-2.45 2h-15a2.5 2.5 0 0 1-2.45-2z" clip-rule="evenodd"></svg:path>`,
})
export class FlatUiMacbookIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
