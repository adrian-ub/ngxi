import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[skillIconsCrystalLightIcon],svg[skill-icons-crystal-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="256" height="256" fill="#F4F4ED" rx="60"></svg:rect><svg:path fill="#000" d="m226.479 154.975l-71.219 71.077c-.285.285-.712.427-.997.285l-97.286-26.066c-.427-.143-.712-.428-.712-.713l-26.21-97.143c-.142-.427 0-.712.286-.997l71.219-71.077c.285-.285.712-.428.997-.285l97.286 26.066c.428.143.712.428.712.712l26.067 97.144c.285.427.142.712-.143.997m-95.434-77.344l-95.576 25.496c-.143 0-.285.285-.143.427l69.938 69.796c.142.142.427.142.427-.143l25.639-95.434c.142 0-.142-.285-.285-.142"></svg:path></svg:g>`,
})
export class SkillIconsCrystalLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
