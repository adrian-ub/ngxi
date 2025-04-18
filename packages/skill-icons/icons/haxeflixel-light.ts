import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[skillIconsHaxeflixelLightIcon],svg[skill-icons-haxeflixel-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="256" height="256" fill="#F4F2ED" rx="60"></svg:rect><svg:path fill="#0C3" d="M56.805 55.977h142.828V199.84H56.805z"></svg:path><svg:path fill="#FC3" d="M33 32h47.61l47.609 23.977l-71.414 71.931L33 79.954z"></svg:path><svg:path fill="#F36" d="M128.219 55.977L175.828 32h47.609v47.954l-23.804 47.954z"></svg:path><svg:path fill="#33F" d="m56.805 127.908l71.414 71.931l-47.61 23.977H33v-47.954z"></svg:path><svg:path fill="#0CF" d="m199.633 127.908l23.804 47.954v47.954h-47.609l-47.609-23.977z"></svg:path></svg:g>`,
})
export class SkillIconsHaxeflixelLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
