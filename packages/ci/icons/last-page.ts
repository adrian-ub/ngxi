import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciLastPageIcon],svg[ci-last-page-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.558 18.01l-1.414-1.413l4.6-4.6l-4.6-4.593L7.558 5.99L13.569 12l-6.01 6.01h-.001Zm10.3-.01h-2V6h2v12Z"></svg:path>`,
})
export class CiLastPageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
