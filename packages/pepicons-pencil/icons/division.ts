import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilDivisionIcon],svg[pepicons-pencil-division-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5 10.5a.5.5 0 0 1 0-1h10a.5.5 0 0 1 0 1z"></svg:path><svg:path fill-rule="evenodd" d="M8.5 6a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0m2 0a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0m-2 8a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0m2 0a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilDivisionIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
