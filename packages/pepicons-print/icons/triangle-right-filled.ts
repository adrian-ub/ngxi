import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPrintTriangleRightFilledIcon],svg[pepicons-print-triangle-right-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M17.52 10.136a1 1 0 0 1 0 1.728l-9.016 5.259A1 1 0 0 1 7 16.259V5.74a1 1 0 0 1 1.504-.864z" opacity=".2"></svg:path><svg:path d="M16 10a.5.5 0 0 1-.243.429l-10 6A.5.5 0 0 1 5 16V4a.5.5 0 0 1 .757-.429l10 6A.5.5 0 0 1 16 10M6 4.883v10.234L14.528 10z"></svg:path></svg:g>`,
})
export class PepiconsPrintTriangleRightFilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
