import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCommunication16RegularIcon],svg[fluent-communication-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3a6 6 0 0 0-4.246 10.239a.5.5 0 1 1-.708.706a7 7 0 1 1 9.908 0a.5.5 0 1 1-.708-.706A6 6 0 0 0 8 3m0 2.5a3.5 3.5 0 0 0-2.475 5.975a.5.5 0 1 1-.707.707a4.5 4.5 0 1 1 6.364 0a.5.5 0 0 1-.707-.707A3.5 3.5 0 0 0 8 5.5M8 7a2 2 0 1 0 0 4a2 2 0 0 0 0-4M7 9a1 1 0 1 1 2 0a1 1 0 0 1-2 0"></svg:path>`,
})
export class FluentCommunication16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
