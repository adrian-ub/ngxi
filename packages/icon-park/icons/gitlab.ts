import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkGitlabIcon],svg[icon-park-gitlab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M23.9627 42L42 27.4152L36.9957 6L30.9661 18.9935H17.9932L11.0151 6L6 27.4152L23.9627 42Z"></svg:path>`,
})
export class IconParkGitlabIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
