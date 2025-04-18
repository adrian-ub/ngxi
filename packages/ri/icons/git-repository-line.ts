import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riGitRepositoryLineIcon],svg[ri-git-repository-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 21v2.5l-3-2l-3 2V21h-.5A3.5 3.5 0 0 1 3 17.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1zm0-2h6v-3H6.5a1.5 1.5 0 0 0 0 3H7v-2h6zm6-5V4H6v10.035Q6.245 14 6.5 14zM7 5h2v2H7zm0 3h2v2H7zm0 3h2v2H7z"></svg:path>`,
})
export class RiGitRepositoryLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
