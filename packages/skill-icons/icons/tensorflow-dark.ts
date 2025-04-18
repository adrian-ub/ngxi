import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[skillIconsTensorflowDarkIcon],svg[skill-icons-tensorflow-dark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="256" height="256" fill="#242938" rx="60"></svg:rect><svg:path fill="#FF6F00" d="m124.228 229l-33.605-20.11V90.31L40 120.459l.123-44.914L124.228 26zm7.556-203v203l33.609-20.11v-57.109l25.37 15.114l-.151-39.062l-25.219-14.845V90.31L216 120.459l-.122-44.914z"></svg:path></svg:g>`,
})
export class SkillIconsTensorflowDarkIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
