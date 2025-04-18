import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPrintCircleIcon],svg[pepicons-print-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10.75 15a4.25 4.25 0 1 0 0-8.5a4.25 4.25 0 0 0 0 8.5m0 2a6.25 6.25 0 1 0 0-12.5a6.25 6.25 0 0 0 0 12.5" opacity=".2"></svg:path><svg:path d="M10 5a5 5 0 1 0 0 10a5 5 0 0 0 0-10m-6 5a6 6 0 1 1 12 0a6 6 0 0 1-12 0"></svg:path></svg:g>`,
})
export class PepiconsPrintCircleIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
