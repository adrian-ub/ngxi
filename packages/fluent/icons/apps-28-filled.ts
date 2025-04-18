import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentApps28FilledIcon],svg[fluent-apps-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.841 2.655a2.25 2.25 0 0 0-3.182 0L13.5 6.815v-.561a2.25 2.25 0 0 0-2.25-2.25h-7A2.25 2.25 0 0 0 2 6.254v18c0 .966.784 1.75 1.75 1.75h18a2.25 2.25 0 0 0 2.25-2.25V16.75a2.25 2.25 0 0 0-2.25-2.25h-.556l4.155-4.155a2.25 2.25 0 0 0 0-3.182zM13.5 10.694l3.806 3.806H13.5zM12 14.5H3.5V6.254a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 .75.75zM3.5 16H12v8.504H4.25a.75.75 0 0 1-.75-.75zm10 8.504V16h8.25a.75.75 0 0 1 .75.75v7.004a.75.75 0 0 1-.75.75z"></svg:path>`,
})
export class FluentApps28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
