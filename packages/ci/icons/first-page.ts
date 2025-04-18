import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciFirstPageIcon],svg[ci-first-page-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.444 18.01L10.432 12l6.012-6.01l1.415 1.414l-4.6 4.6l4.6 4.6l-1.415 1.406Zm-8.3-.01h-2V6h2v12Z"></svg:path>`,
})
export class CiFirstPageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
