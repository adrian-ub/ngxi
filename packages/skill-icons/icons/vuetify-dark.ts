import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[skillIconsVuetifyDarkIcon],svg[skill-icons-vuetify-dark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#skillIconsVuetifyDark0)"><svg:path fill="#242938" d="M196 0H60C26.863 0 0 26.863 0 60v136c0 33.137 26.863 60 60 60h136c33.137 0 60-26.863 60-60V60c0-33.137-26.863-60-60-60"></svg:path><svg:g clip-path="url(#skillIconsVuetifyDark1)"><svg:path fill="#1697F6" d="m129.353 102.949l-34.892 60.569l33.039 57.373l43.76-75.945L215 69h-66.098z"></svg:path><svg:path fill="#AEDDFF" d="m83.76 144.946l2.291 3.994l32.641-56.675L132.103 69H40z"></svg:path><svg:path fill="#1867C0" d="M148.902 69c16.539 54.538-21.402 151.891-21.402 151.891l-33.04-57.373z"></svg:path><svg:path fill="#7BC6FF" d="M132.103 69c-69.685 0-46.051 79.94-46.051 79.94z"></svg:path></svg:g></svg:g><svg:defs><svg:clippath id="skillIconsVuetifyDark0"><svg:path fill="#fff" d="M0 0h256v256H0z"></svg:path></svg:clippath><svg:clippath id="skillIconsVuetifyDark1"><svg:path fill="#fff" d="M40 69h175v152H40z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class SkillIconsVuetifyDarkIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
