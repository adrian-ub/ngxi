import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[skillIconsJuliaDarkIcon],svg[skill-icons-julia-dark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="256" height="256" fill="#242938" rx="60"></svg:rect><svg:path fill="#CB3C33" d="M118.509 177.431c0 26.435-21.16 47.851-47.255 47.851c-26.106 0-47.254-21.416-47.254-47.851c0-26.425 21.148-47.851 47.254-47.851c26.096 0 47.255 21.426 47.255 47.851"></svg:path><svg:path fill="#9558B2" d="M232.046 177.431c0 26.435-21.159 47.851-47.255 47.851c-26.095 0-47.254-21.416-47.254-47.851c0-26.425 21.159-47.851 47.254-47.851c26.096 0 47.255 21.426 47.255 47.851"></svg:path><svg:path fill="#389826" d="M175.288 77.851c0 26.425-21.159 47.851-47.255 47.851c-26.106 0-47.254-21.426-47.254-47.85C80.78 51.425 101.927 30 128.033 30c26.096 0 47.255 21.426 47.255 47.851"></svg:path></svg:g>`,
})
export class SkillIconsJuliaDarkIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
