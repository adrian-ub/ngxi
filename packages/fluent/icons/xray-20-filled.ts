import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentXray20FilledIcon],svg[fluent-xray-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 13.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0M7.5 13a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1M3 4.5A2.5 2.5 0 0 1 5.5 2h8A2.5 2.5 0 0 1 16 4.5v11a2.5 2.5 0 0 1-2.5 2.5h-8A2.5 2.5 0 0 1 3 15.5zm7 1a.5.5 0 0 0-1 0V6H7.5a.5.5 0 0 0 0 1H9v1H6.5a.5.5 0 0 0 0 1H9v1H6.5a.5.5 0 0 0 0 1H9v1H7.5a1.5 1.5 0 1 0 1.415 1h1.17a1.5 1.5 0 1 0 1.415-1H10v-1h2.5a.5.5 0 0 0 0-1H10V9h2.5a.5.5 0 0 0 0-1H10V7h1.5a.5.5 0 0 0 0-1H10z"></svg:path>`,
})
export class FluentXray20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
