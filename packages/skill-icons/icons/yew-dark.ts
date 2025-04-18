import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[skillIconsYewDarkIcon],svg[skill-icons-yew-dark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#skillIconsYewDark0)"><svg:path fill="#242938" d="M196 0H60C26.863 0 0 26.863 0 60v136c0 33.137 26.863 60 60 60h136c33.137 0 60-26.863 60-60V60c0-33.137-26.863-60-60-60"></svg:path><svg:path fill="#B3E1CE" d="M129.333 191.805c36.819 0 66.667-29.757 66.667-66.464s-29.848-66.463-66.667-66.463s-66.666 29.757-66.666 66.463c0 36.707 29.847 66.464 66.666 66.464"></svg:path><svg:path stroke="#444" stroke-linecap="round" stroke-width="12" d="M129.966 128.09L65.333 56.22m64.633 71.87l64.633-71.87m-64.633 71.87v74.349"></svg:path><svg:path fill="#009A5B" stroke="#444" stroke-width="8" d="M129.333 146.61c10.31 0 18.667-8.332 18.667-18.61s-8.357-18.61-18.667-18.61c-10.309 0-18.666 8.332-18.666 18.61s8.357 18.61 18.666 18.61Z"></svg:path></svg:g><svg:defs><svg:clippath id="skillIconsYewDark0"><svg:path fill="#fff" d="M0 0h256v256H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class SkillIconsYewDarkIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
