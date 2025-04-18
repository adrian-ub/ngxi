import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilListOffIcon],svg[pepicons-pencil-list-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6.5 6a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0 4a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0 4a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"></svg:path><svg:path fill-rule="evenodd" d="M7.5 6.5A.5.5 0 0 1 8 6h8a.5.5 0 0 1 0 1H8a.5.5 0 0 1-.5-.5m0 4A.5.5 0 0 1 8 10h8a.5.5 0 0 1 0 1H8a.5.5 0 0 1-.5-.5m0 4A.5.5 0 0 1 8 14h8a.5.5 0 0 1 0 1H8a.5.5 0 0 1-.5-.5" clip-rule="evenodd"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilListOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
