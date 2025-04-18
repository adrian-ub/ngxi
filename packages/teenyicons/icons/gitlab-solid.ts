import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsGitlabSolidIcon],svg[teenyicons-gitlab-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.974.342a.5.5 0 0 0-.96.037l-2 8a.5.5 0 0 0 .16.5l7 6a.5.5 0 0 0 .651 0l7-6a.5.5 0 0 0 .16-.5l-2-8a.5.5 0 0 0-.96-.037L10.14 6H4.86z"></svg:path>`,
})
export class TeenyiconsGitlabSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
