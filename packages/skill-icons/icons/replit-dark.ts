import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[skillIconsReplitDarkIcon],svg[skill-icons-replit-dark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="256" height="256" fill="#242938" rx="60"></svg:rect><svg:path fill="#F26207" d="M53 49.25C53 43.037 58.037 38 64.25 38h52.5c6.213 0 11.25 5.037 11.25 11.25V98H64.25C58.037 98 53 92.963 53 86.75zm74.999 48.752h63.75c6.213 0 11.25 5.037 11.25 11.25v37.5c0 6.213-5.037 11.25-11.25 11.25h-63.75z"></svg:path><svg:path fill="#F26207" d="M53 169.25c0-6.213 5.037-11.25 11.25-11.25H128v48.75c0 6.213-5.037 11.25-11.25 11.25h-52.5C58.037 218 53 212.963 53 206.75z"></svg:path></svg:g>`,
})
export class SkillIconsReplitDarkIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
