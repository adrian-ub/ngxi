import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[skillIconsWindowsDarkIcon],svg[skill-icons-windows-dark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#skillIconsWindowsDark0)"><svg:path fill="#242938" d="M196 0H60C26.863 0 0 26.863 0 60v136c0 33.137 26.863 60 60 60h136c33.137 0 60-26.863 60-60V60c0-33.137-26.863-60-60-60"></svg:path><svg:path fill="#00ADEF" d="m40 65.663l70.968-9.665l.032 68.455l-70.934.404zm70.935 66.677l.055 68.515l-70.934-9.753l-.004-59.221zm8.602-77.607L213.636 41v82.582l-94.099.748zm94.121 78.251l-.022 82.211l-94.099-13.281l-.131-69.083z"></svg:path></svg:g><svg:defs><svg:clippath id="skillIconsWindowsDark0"><svg:path fill="#fff" d="M0 0h256v256H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class SkillIconsWindowsDarkIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
