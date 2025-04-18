import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPrintNoEntryIcon],svg[pepicons-print-no-entry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M5 11.5a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0" opacity=".2"></svg:path><svg:path d="M10 3.5a6.5 6.5 0 1 0 0 13a6.5 6.5 0 0 0 0-13M2.5 10a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0"></svg:path><svg:path d="M15.304 4.697a.5.5 0 0 1 0 .707l-9.9 9.9a.5.5 0 1 1-.707-.707l9.9-9.9a.5.5 0 0 1 .707 0"></svg:path></svg:g>`,
})
export class PepiconsPrintNoEntryIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
