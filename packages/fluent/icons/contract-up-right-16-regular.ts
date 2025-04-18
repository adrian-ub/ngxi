import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentContractUpRight16RegularIcon],svg[fluent-contract-up-right-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 3A1.5 1.5 0 0 0 3 4.5v2a.5.5 0 0 1-1 0v-2A2.5 2.5 0 0 1 4.5 2h7A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-2a.5.5 0 0 1 0-1h2a1.5 1.5 0 0 0 1.5-1.5V8H9.5A1.5 1.5 0 0 1 8 6.5V3zM9 3v3.5a.5.5 0 0 0 .5.5H13V4.5A1.5 1.5 0 0 0 11.5 3zm-6.5 7a.5.5 0 0 1 0-1h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-2.793l-3.146 3.147a.5.5 0 0 1-.708-.708L5.293 10z"></svg:path>`,
})
export class FluentContractUpRight16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
