import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconGraph24Icon],svg[octicon-graph-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 2.75a.75.75 0 0 0-1.5 0v18.5c0 .414.336.75.75.75H20a.75.75 0 0 0 0-1.5H2.5z"></svg:path><svg:path fill="currentColor" d="M22.28 7.78a.75.75 0 0 0-1.06-1.06l-5.72 5.72l-3.72-3.72a.75.75 0 0 0-1.06 0l-6 6a.75.75 0 1 0 1.06 1.06l5.47-5.47l3.72 3.72a.75.75 0 0 0 1.06 0z"></svg:path>`,
})
export class OcticonGraph24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
