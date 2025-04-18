import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColumn20RegularIcon],svg[fluent-column-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 17a.5.5 0 0 0 0-1H16a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h.5a.5.5 0 0 0 0-1H16a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2zM7 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2zm5 10V5a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1m-8 2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-.5a.5.5 0 0 0 0 1H4a1 1 0 0 1 1 1v10q0 .052-.005.102A1 1 0 0 1 4 16h-.5a.5.5 0 1 0 0 1z"></svg:path>`,
})
export class FluentColumn20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
