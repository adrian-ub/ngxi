import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosMicrosoftPowerBiIcon],svg[logos-microsoft-power-bi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="logosMicrosoftPowerBi0" x1="42.593%" x2="57.245%" y1="0%" y2="93.174%"><svg:stop offset="0%" stop-color="#E6AD10"></svg:stop><svg:stop offset="100%" stop-color="#C87E0E"></svg:stop></svg:lineargradient><svg:lineargradient id="logosMicrosoftPowerBi1" x1="40.122%" x2="62.028%" y1="0%" y2="95.592%"><svg:stop offset="0%" stop-color="#F6D751"></svg:stop><svg:stop offset="100%" stop-color="#E6AD10"></svg:stop></svg:lineargradient><svg:lineargradient id="logosMicrosoftPowerBi2" x1="27.774%" x2="55.012%" y1="0%" y2="96.828%"><svg:stop offset="0%" stop-color="#F9E589"></svg:stop><svg:stop offset="100%" stop-color="#F6D751"></svg:stop></svg:lineargradient><svg:path id="logosMicrosoftPowerBi3" d="M142.222 14.222C142.222 6.368 148.59 0 156.444 0h85.334C249.632 0 256 6.368 256 14.222v312.89c0 7.854-6.368 14.221-14.222 14.221H14.222C6.368 341.333 0 334.966 0 327.111V184.89c0-7.855 6.368-14.222 14.222-14.222h56.89V99.556c0-7.855 6.367-14.223 14.222-14.223h56.888z"></svg:path></svg:defs><svg:mask id="logosMicrosoftPowerBi4" fill="#fff"><svg:use href="#logosMicrosoftPowerBi3"></svg:use></svg:mask><svg:path fill="url(#logosMicrosoftPowerBi0)" d="M256 0v341.333H142.222V0z" mask="url(#logosMicrosoftPowerBi4)"></svg:path><svg:path fill-opacity=".2" d="M184.889 100.978v241.778H71.11v-256h99.556c7.854 0 14.222 6.367 14.222 14.222" mask="url(#logosMicrosoftPowerBi4)"></svg:path><svg:path fill-opacity=".18" d="M184.889 106.667v241.777H71.11v-256h99.556c7.854 0 14.222 6.368 14.222 14.223" mask="url(#logosMicrosoftPowerBi4)"></svg:path><svg:path fill="url(#logosMicrosoftPowerBi1)" d="M184.889 99.556v241.777H71.11v-256h99.556c7.854 0 14.222 6.368 14.222 14.223" mask="url(#logosMicrosoftPowerBi4)"></svg:path><svg:path fill="url(#logosMicrosoftPowerBi2)" d="M0 170.667v170.666h113.778V184.89c0-7.855-6.368-14.222-14.222-14.222z" mask="url(#logosMicrosoftPowerBi4)"></svg:path>`,
})
export class LogosMicrosoftPowerBiIcon {
  readonly viewBox = input("0 0 256 342")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
