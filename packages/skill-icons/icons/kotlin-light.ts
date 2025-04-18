import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[skillIconsKotlinLightIcon],svg[skill-icons-kotlin-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="256" height="256" fill="#F4F2ED" rx="60"></svg:rect><svg:path fill="url(#skillIconsKotlinLight0)" d="M218 218H38V38h180l-90 90z"></svg:path><svg:defs><svg:lineargradient id="skillIconsKotlinLight0" x1="218" x2="38" y1="38" y2="218" gradientUnits="userSpaceOnUse"><svg:stop offset=".003" stop-color="#E44857"></svg:stop><svg:stop offset=".469" stop-color="#C711E1"></svg:stop><svg:stop offset="1" stop-color="#7F52FF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class SkillIconsKotlinLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
