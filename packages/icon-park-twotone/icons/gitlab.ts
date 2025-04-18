import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneGitlabIcon],svg[icon-park-twotone-gitlab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTGitlab0"><svg:path fill="#555" stroke="#fff" stroke-linejoin="round" stroke-width="4" d="M23.963 42L42 27.415L36.996 6l-6.03 12.994H17.993L11.015 6L6 27.415z"></svg:path></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTGitlab0)"></svg:path>`,
})
export class IconParkTwotoneGitlabIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
