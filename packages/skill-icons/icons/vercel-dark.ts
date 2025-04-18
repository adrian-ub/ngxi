import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[skillIconsVercelDarkIcon],svg[skill-icons-vercel-dark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="256" height="256" fill="#242938" rx="60"></svg:rect><svg:path fill="#fff" d="m128 34l95 164.853H33z"></svg:path></svg:g>`,
})
export class SkillIconsVercelDarkIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
