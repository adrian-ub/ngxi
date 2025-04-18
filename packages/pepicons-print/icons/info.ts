import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPrintInfoIcon],svg[pepicons-print-info-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g opacity=".2"><svg:path fill-rule="evenodd" d="M11 8a2 2 0 0 1 2 2v7a2 2 0 1 1-4 0v-7a2 2 0 0 1 2-2" clip-rule="evenodd"></svg:path><svg:path d="M13 5a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path></svg:g><svg:path fill-rule="evenodd" d="M10.25 7.75a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0v-9a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path><svg:path d="M11.5 4.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0"></svg:path></svg:g>`,
})
export class PepiconsPrintInfoIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
