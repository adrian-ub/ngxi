import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconGitlabIcon],svg[picon-gitlab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 8L0 4l1-4zl3-8l1 4M.5 3L4 8l3.5-5"></svg:path>`,
})
export class PiconGitlabIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
