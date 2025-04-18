import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTasksApp28FilledIcon],svg[fluent-tasks-app-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.25 2A3.25 3.25 0 0 0 4 5.25v17.5A3.25 3.25 0 0 0 7.25 26h9.568l-2.157-2.157a2.25 2.25 0 1 1 3.182-3.182l1.407 1.407l4.409-4.409q.16-.16.341-.28V5.25A3.25 3.25 0 0 0 20.75 2zm3.25 6.75a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0m-1.25 6.5a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5m0 5.25a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5M12.75 8h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5M12 14a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 12 14m.75 4.5h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5m7.03 7.28l6-6a.75.75 0 1 0-1.06-1.06l-5.47 5.47l-2.468-2.468a.75.75 0 0 0-1.06 1.06l2.998 2.998a.75.75 0 0 0 1.06 0"></svg:path>`,
})
export class FluentTasksApp28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
