import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocumentBulletListClock24FilledIcon],svg[fluent-document-bullet-list-clock-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 8V2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h6.81a6.5 6.5 0 0 1-1.636-3h-.424a.75.75 0 0 1 0-1.5H11q.002-.776.174-1.5h-.424a.75.75 0 0 1 0-1.5h.982A6.5 6.5 0 0 1 12.81 13h-2.06a.75.75 0 0 1 0-1.5h4.246A6.5 6.5 0 0 1 17.5 11c.886 0 1.73.177 2.5.498V10h-6a2 2 0 0 1-2-2m-5 4.25a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0m0 3a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0m0 3a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0M13.5 8V2.5l6 6H14a.5.5 0 0 1-.5-.5m9.5 9.5a5.5 5.5 0 1 0-11 0a5.5 5.5 0 0 0 11 0m-5.78.418a.5.5 0 0 1-.219-.489L17 13.5a.5.5 0 1 1 1 0l.001 3.5h2.496a.5.5 0 0 1 0 1H17.56a.5.5 0 0 1-.34-.082"></svg:path>`,
})
export class FluentDocumentBulletListClock24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
