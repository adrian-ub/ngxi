import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentApps28RegularIcon],svg[fluent-apps-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.841 2.655a2.25 2.25 0 0 0-3.182 0L13.5 6.815v-.561a2.25 2.25 0 0 0-2.25-2.25h-7A2.25 2.25 0 0 0 2 6.254v18c0 .966.784 1.75 1.75 1.75h18a2.25 2.25 0 0 0 2.25-2.25V16.75a2.25 2.25 0 0 0-2.25-2.25h-.556l4.155-4.155a2.25 2.25 0 0 0 0-3.182zM17.306 14.5H13.5v-3.806zM18.72 3.716a.75.75 0 0 1 1.06 0l4.508 4.508a.75.75 0 0 1 0 1.06l-4.508 4.508a.75.75 0 0 1-1.06 0l-4.508-4.508a.75.75 0 0 1 0-1.06zM12 6.254V14.5H3.5V6.254a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 .75.75m-8.5 17.5V16H12v8.504H4.25a.75.75 0 0 1-.75-.75M13.5 16h8.25a.75.75 0 0 1 .75.75v7.004a.75.75 0 0 1-.75.75H13.5z"></svg:path>`,
})
export class FluentApps28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
