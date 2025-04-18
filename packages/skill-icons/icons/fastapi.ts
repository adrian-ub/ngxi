import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[skillIconsFastapiIcon],svg[skill-icons-fastapi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="256" height="256" fill="#049789" rx="60"></svg:rect><svg:path fill="#fff" d="M127.5 41C79.743 41 41 79.743 41 127.5S79.743 214 127.5 214s86.5-38.743 86.5-86.5S175.257 41 127.5 41m-4.507 155.839v-54.258H92.831l43.336-84.42v54.258h29.036z"></svg:path></svg:g>`,
})
export class SkillIconsFastapiIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
