import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentProtocolHandler20FilledIcon],svg[fluent-protocol-handler-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.585 5.414L2.414 8.585a2 2 0 0 0 0 2.829l3.171 3.172a2 2 0 0 0 2.829 0l3.172-3.172a2 2 0 0 0 0-2.829L8.414 5.414a2 2 0 0 0-2.829 0m6 9.172l-.878-.88l1.586-1.585a3 3 0 0 0 0-4.243l-1.586-1.585l.878-.88a2 2 0 0 1 2.829 0l3.172 3.172a2 2 0 0 1 0 2.829l-3.172 3.172a2 2 0 0 1-2.828 0"></svg:path>`,
})
export class FluentProtocolHandler20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
