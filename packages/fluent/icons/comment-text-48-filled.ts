import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCommentText48FilledIcon],svg[fluent-comment-text-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.25 6A7.25 7.25 0 0 0 4 13.25v15.5A7.25 7.25 0 0 0 11.25 36H12v5.82c0 1.824 2.057 2.89 3.547 1.838L26.398 36H36.75A7.25 7.25 0 0 0 44 28.75v-15.5A7.25 7.25 0 0 0 36.75 6zm11 17.5a1.25 1.25 0 1 1 0-2.5h13.5a1.25 1.25 0 1 1 0 2.5zm-5.5-2.5a1.25 1.25 0 1 1 0 2.5h-4.5a1.25 1.25 0 1 1 0-2.5zm-4.5 5.5h14.5a1.25 1.25 0 1 1 0 2.5h-14.5a1.25 1.25 0 1 1 0-2.5m20 2.5a1.25 1.25 0 1 1 0-2.5h3.5a1.25 1.25 0 1 1 0 2.5z"></svg:path>`,
})
export class FluentCommentText48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
