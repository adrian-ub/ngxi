import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fePlugIcon],svg[fe-plug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17 11v2h3a1 1 0 0 1 0 2h-3.268A2 2 0 0 1 15 16h-3a4 4 0 0 1-3.876-3.008A1 1 0 0 1 8 13H4a1 1 0 0 1 0-2h4q.063 0 .124.008A4 4 0 0 1 12 8h3a2 2 0 0 1 1.732 1H20a1 1 0 0 1 0 2z"></svg:path>`,
})
export class FePlugIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
