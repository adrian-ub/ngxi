import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[skillIconsPnpmDarkIcon],svg[skill-icons-pnpm-dark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#skillIconsPnpmDark0)"><svg:path fill="#242938" d="M196 0H60C26.863 0 0 26.863 0 60v136c0 33.137 26.863 60 60 60h136c33.137 0 60-26.863 60-60V60c0-33.137-26.863-60-60-60"></svg:path><svg:path fill="#F9AD00" d="M40 41h55v55H40zm60 0h55v55h-55zm60 0h55v55h-55zm0 60h55v55h-55z"></svg:path><svg:path fill="#4E4E4E" d="M160 161h55v55h-55zm-60 0h55v55h-55zm-60 0h55v55H40z"></svg:path><svg:path fill="#242938" d="M40 101h55v55H40z"></svg:path><svg:path fill="#4E4E4E" d="M100 101h55v55h-55z"></svg:path></svg:g><svg:defs><svg:clippath id="skillIconsPnpmDark0"><svg:path fill="#fff" d="M0 0h256v256H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class SkillIconsPnpmDarkIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
