import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBranchRequestClosed16FilledIcon],svg[fluent-branch-request-closed-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3.5a2.5 2.5 0 0 1-2 2.45v4.1a2.5 2.5 0 1 1-1 0v-4.1A2.5 2.5 0 1 1 6 3.5M12.5 15a2.5 2.5 0 0 0 .5-4.95V6.5a.5.5 0 0 0-1 0v3.55a2.5 2.5 0 0 0 .5 4.95M10.646 1.646a.5.5 0 0 1 .708 0L12.5 2.793l1.146-1.147a.5.5 0 0 1 .708.708L13.207 3.5l1.147 1.146a.5.5 0 0 1-.708.708L12.5 4.207l-1.146 1.147a.5.5 0 0 1-.708-.708L11.793 3.5l-1.147-1.146a.5.5 0 0 1 0-.708"></svg:path>`,
})
export class FluentBranchRequestClosed16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
