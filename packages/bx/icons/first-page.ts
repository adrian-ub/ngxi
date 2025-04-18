import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxFirstPageIcon],svg[bx-first-page-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.293 17.707l1.414-1.414L13.414 12l4.293-4.293l-1.414-1.414L10.586 12zM7 6h2v12H7z"></svg:path>`,
})
export class BxFirstPageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
