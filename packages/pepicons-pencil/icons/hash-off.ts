import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilHashOffIcon],svg[pepicons-pencil-hash-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M3 7.75a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5m0 5.5a.5.5 0 0 1 .5-.5h13a.5.5 0 1 1 0 1h-13a.5.5 0 0 1-.5-.5" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M7.791 3.502a.5.5 0 0 1 .457.54l-1 12a.5.5 0 0 1-.996-.084l1-12a.5.5 0 0 1 .54-.456m5.5 0a.5.5 0 0 1 .456.54l-1 12a.5.5 0 0 1-.996-.084l1-12a.5.5 0 0 1 .54-.456" clip-rule="evenodd"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilHashOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
