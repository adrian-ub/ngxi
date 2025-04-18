import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[skillIconsAlpinejsLightIcon],svg[skill-icons-alpinejs-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="256" height="256" fill="#F4F2ED" rx="60"></svg:rect><svg:path fill="#77C1D2" fill-rule="evenodd" d="M180.778 84L223 126.037l-42.222 42.037l-42.223-42.037z" clip-rule="evenodd"></svg:path><svg:path fill="#2D3441" fill-rule="evenodd" d="m75.222 84l87.532 87.148H78.31L33 126.037z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class SkillIconsAlpinejsLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
