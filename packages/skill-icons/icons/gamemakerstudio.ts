import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[skillIconsGamemakerstudioIcon],svg[skill-icons-gamemakerstudio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="256" height="256" fill="#8CD248" rx="60"></svg:rect><svg:path fill="#000" d="M128.497 127.954v45.03l-45.682-45.03l45.682-45.033l45.683 45.033zm0-106.954L20 127.954l108.497 106.951l45.687-45.036v-61.915h62.809z"></svg:path></svg:g>`,
})
export class SkillIconsGamemakerstudioIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
