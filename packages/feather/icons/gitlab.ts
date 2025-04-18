import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[featherGitlabIcon],svg[feather-gitlab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22.65 14.39L12 22.13L1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78l2.44-7.51A.4.4 0 0 1 4.82 2a.43.43 0 0 1 .58 0a.4.4 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.4.4 0 0 1 18.6 2a.43.43 0 0 1 .58 0a.4.4 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94"></svg:path>`,
})
export class FeatherGitlabIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
