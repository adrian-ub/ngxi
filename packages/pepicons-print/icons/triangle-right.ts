import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPrintTriangleRightIcon],svg[pepicons-print-triangle-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M14.514 11.25L8 7.472v7.556zm2.495.865a1 1 0 0 0 0-1.73L7.502 4.871A1 1 0 0 0 6 5.736v11.028a1 1 0 0 0 1.502.865z" opacity=".2"></svg:path><svg:path d="M16 10a.5.5 0 0 1-.243.429l-10 6A.5.5 0 0 1 5 16V4a.5.5 0 0 1 .757-.429l10 6A.5.5 0 0 1 16 10M6 4.883v10.234L14.528 10z"></svg:path></svg:g>`,
})
export class PepiconsPrintTriangleRightIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
