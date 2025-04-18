import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[skillIconsVercelLightIcon],svg[skill-icons-vercel-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="256" height="256" fill="#F4F2ED" rx="60"></svg:rect><svg:path fill="#000" d="m128 34l95 164.853H33z"></svg:path></svg:g>`,
})
export class SkillIconsVercelLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
