import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPrintLineXIcon],svg[pepicons-print-line-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M1.5 11A1.5 1.5 0 0 1 3 9.5h15a1.5 1.5 0 0 1 0 3H3A1.5 1.5 0 0 1 1.5 11" opacity=".2"></svg:path><svg:path d="M.5 10a.5.5 0 0 1 .5-.5h18a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5"></svg:path></svg:g>`,
})
export class PepiconsPrintLineXIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
