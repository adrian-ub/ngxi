import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phGitlabLogoSimpleFillIcon],svg[ph-gitlab-logo-simple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m208.14 178.06l-73.27 51.76a11.91 11.91 0 0 1-13.74 0l-73.27-51.76a57.19 57.19 0 0 1-22-61L45.75 41a11.94 11.94 0 0 1 22.79-1.11L86.22 88h83.56l17.68-48.13A11.94 11.94 0 0 1 210.25 41l19.9 76.12a57.19 57.19 0 0 1-22.01 60.94"></svg:path>`,
})
export class PhGitlabLogoSimpleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
