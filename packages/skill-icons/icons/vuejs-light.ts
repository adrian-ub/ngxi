import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[skillIconsVuejsLightIcon],svg[skill-icons-vuejs-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="256" height="256" fill="#F4F2EE" rx="60"></svg:rect><svg:path fill="#41B883" d="M182 50h36l-90 155.25L38 50h68.85L128 86l20.7-36z"></svg:path><svg:path fill="#41B883" d="m38 50l90 155.25L218 50h-36l-54 93.15L73.55 50z"></svg:path><svg:path fill="#35495E" d="M73.55 50L128 143.6L182 50h-33.3L128 86l-21.15-36z"></svg:path></svg:g>`,
})
export class SkillIconsVuejsLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
