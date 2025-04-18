import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmGitlabIcon],svg[charm-gitlab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8 14.25l-6.25-4.5l2-8l2 5.5h4.5l2-5.5l2 8z"></svg:path>`,
})
export class CharmGitlabIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
