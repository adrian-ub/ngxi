import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilSlidersOffIcon],svg[pepicons-pencil-sliders-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M3 4.75a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m11.38 0a.5.5 0 0 1 .5-.5h1.62a.5.5 0 0 1 0 1h-1.62a.5.5 0 0 1-.5-.5" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M12.75 6.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0 1a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5M3 14.75a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m11.38 0a.5.5 0 0 1 .5-.5h1.62a.5.5 0 0 1 0 1h-1.62a.5.5 0 0 1-.5-.5" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M12.75 16.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0 1a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5M3 9.75a.5.5 0 0 1 .5-.5h2.13a.5.5 0 0 1 0 1H3.5a.5.5 0 0 1-.5-.5m6.5 0a.5.5 0 0 1 .5-.5h6.5a.5.5 0 0 1 0 1H10a.5.5 0 0 1-.5-.5" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M7.75 11.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0 1a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5" clip-rule="evenodd"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilSlidersOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
