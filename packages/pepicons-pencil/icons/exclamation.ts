import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilExclamationIcon],svg[pepicons-pencil-exclamation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M10.25 2.25A.75.75 0 0 1 11 3v9a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path><svg:path d="M11.5 16.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0"></svg:path></svg:g>`,
})
export class PepiconsPencilExclamationIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
