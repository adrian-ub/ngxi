import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[skillIconsMarkdownLightIcon],svg[skill-icons-markdown-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="256" height="256" fill="#F4F2ED" rx="60"></svg:rect><svg:path stroke="#000" stroke-width="10" d="M217 69H39c-5.523 0-10 4.477-10 10v98c0 5.523 4.477 10 10 10h178c5.523 0 10-4.477 10-10V79c0-5.523-4.477-10-10-10Z"></svg:path><svg:path fill="#000" d="M54 162V94h20l20 25l20-25h20v68h-20v-39l-20 25l-20-25v39zm125 0l-30-33h20V94h20v35h20z"></svg:path></svg:g>`,
})
export class SkillIconsMarkdownLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
