import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[skillIconsCrystalDarkIcon],svg[skill-icons-crystal-dark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="256" height="256" fill="#242938" rx="60"></svg:rect><svg:path fill="#000" stroke="#fff" stroke-linecap="round" stroke-width="5" d="m155.26 226.052l71.219-71.077c.285-.285.428-.57.143-.997l-26.067-97.144c0-.285-.284-.57-.712-.712l-97.286-26.066c-.285-.143-.712 0-.997.285l-71.22 71.077c-.284.285-.427.57-.284.997l26.209 97.143c0 .285.285.57.712.713l97.286 26.066c.285.142.712 0 .997-.285Z"></svg:path><svg:path fill="#fff" d="m105.691 173.207l-70.222-70.08l95.861-25.354z"></svg:path></svg:g>`,
})
export class SkillIconsCrystalDarkIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
