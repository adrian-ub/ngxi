import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentProtocolHandler16FilledIcon],svg[fluent-protocol-handler-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.585 4.414L1.414 6.585a2 2 0 0 0 0 2.829l2.171 2.172a2 2 0 0 0 2.829 0l2.171-2.172a2 2 0 0 0 0-2.829L6.414 4.414a2 2 0 0 0-2.829 0m6 7.172l-.878-.88l.586-.585a3 3 0 0 0 0-4.243l-.586-.585l.878-.88a2 2 0 0 1 2.829 0l2.172 2.172a2 2 0 0 1 0 2.829l-2.172 2.172a2 2 0 0 1-2.829 0"></svg:path>`,
})
export class FluentProtocolHandler16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
