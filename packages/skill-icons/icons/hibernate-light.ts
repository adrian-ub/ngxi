import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[skillIconsHibernateLightIcon],svg[skill-icons-hibernate-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="256" height="256" fill="#F4F4ED" rx="60"></svg:rect><svg:path fill="#59666C" d="m75.616 38l34.622 59.962l-34.639 60.047L41 97.962z"></svg:path><svg:path fill="#BCAE79" d="M144.871 38.003H75.636l34.622 59.962h69.254z"></svg:path><svg:path fill="#59666C" d="m179.476 218l-34.622-59.962l34.639-60.047l34.599 60.047z"></svg:path><svg:path fill="#BCAE79" d="M110.221 217.995h69.244l-34.594-59.962H75.58z"></svg:path></svg:g>`,
})
export class SkillIconsHibernateLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
