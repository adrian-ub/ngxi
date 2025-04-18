import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentProtocolHandler24FilledIcon],svg[fluent-protocol-handler-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.482 17.732l-.775-.775l2.482-2.482a3.5 3.5 0 0 0 0-4.95l-2.482-2.482l.775-.776a2.5 2.5 0 0 1 3.535 0l3.965 3.965a2.5 2.5 0 0 1 0 3.535l-3.965 3.965a2.5 2.5 0 0 1-3.535 0m1-3.965a2.5 2.5 0 0 0 0-3.535l-3.965-3.965a2.5 2.5 0 0 0-3.535 0l-3.965 3.965a2.5 2.5 0 0 0 0 3.535l3.965 3.965a2.5 2.5 0 0 0 3.535 0z"></svg:path>`,
})
export class FluentProtocolHandler24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
