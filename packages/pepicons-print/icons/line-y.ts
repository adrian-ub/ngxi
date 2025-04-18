import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPrintLineYIcon],svg[pepicons-print-line-y-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M11 1.5A1.5 1.5 0 0 0 9.5 3v15a1.5 1.5 0 0 0 3 0V3A1.5 1.5 0 0 0 11 1.5" opacity=".2"></svg:path><svg:path d="M10 .5a.5.5 0 0 0-.5.5v18a.5.5 0 0 0 1 0V1a.5.5 0 0 0-.5-.5"></svg:path></svg:g>`,
})
export class PepiconsPrintLineYIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
