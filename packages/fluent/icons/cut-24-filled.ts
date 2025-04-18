import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCut24FilledIcon],svg[fluent-cut-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.83 2.44a1 1 0 0 0-1.66 1.117l4.793 7.114l-2.326 3.678a4 4 0 1 0 1.57 1.26l1.977-3.126l1.884 2.796a4 4 0 1 0 1.683-1.08l-3.62-5.375v.001zM5 18a2 2 0 1 1 4 0a2 2 0 0 1-4 0m10 0a2 2 0 1 1 4 0a2 2 0 0 1-4 0m-.48-9.21l3.325-5.256a1 1 0 0 0-1.69-1.07L13.3 6.979z"></svg:path>`,
})
export class FluentCut24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
