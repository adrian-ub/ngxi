import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[skillIconsProcessingDarkIcon],svg[skill-icons-processing-dark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="256" height="256" fill="#242938" rx="60"></svg:rect><svg:path stroke="#0468FF" stroke-width="42.286" d="M138.572 170.762c84.571 0 84.571-112.762 0-112.762"></svg:path><svg:path stroke="#1F34AB" stroke-width="42.286" d="M138.571 86.19L54 198.952"></svg:path><svg:path stroke="#85AEFF" stroke-width="42.286" d="m54 114.381l28.19 56.381"></svg:path></svg:g>`,
})
export class SkillIconsProcessingDarkIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
