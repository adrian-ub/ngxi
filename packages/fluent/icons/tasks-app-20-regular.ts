import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTasksApp20RegularIcon],svg[fluent-tasks-app-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9.883l-1 1.01V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h4.085c.071.2.185.389.344.55l.441.45H6a2 2 0 0 1-2-2zm4 1.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0M9.5 5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm0 4a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zM9 13.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m-2-3a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2m10.855.352a.5.5 0 0 0-.71-.704l-3.643 3.68l-1.645-1.678a.5.5 0 1 0-.714.7l1.929 1.968a.6.6 0 0 0 .855.002z"></svg:path>`,
})
export class FluentTasksApp20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
