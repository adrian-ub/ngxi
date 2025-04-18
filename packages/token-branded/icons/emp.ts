import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedEmpIcon],svg[token-branded-emp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedEmp0)" d="M8.626 14.25H3.282A9 9 0 0 1 3.001 12c0-4.973 3.988-9 8.91-9H21l-2.785 2.627l-.073-.034z"></svg:path><svg:path fill="url(#tokenBrandedEmp1)" d="M20.999 11.999A9 9 0 0 1 5.7 18.422l3.487-3.61A3.98 3.98 0 0 0 12 15.935a3.938 3.938 0 0 0 3.121-6.339l.253-.225l3.353-3.352a8.97 8.97 0 0 1 2.272 5.979"></svg:path><svg:path fill="url(#tokenBrandedEmp2)" d="M20.999 11.999A9 9 0 0 1 3.45 14.81h5.737l.287.253c.855.76 2.47 2.182 4.96 2.182c3.19 0 6.002-3.183 6.002-6.372c0-1.361-.281-2.503-.63-3.353A8.96 8.96 0 0 1 21 12"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedEmp0" x1="6.713" x2="18.084" y1="18.598" y2="13.719" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0031A5"></svg:stop><svg:stop offset=".48" stop-color="#009EEF"></svg:stop><svg:stop offset="1" stop-color="#009DEE"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedEmp1" x1="12.039" x2="12.039" y1="3" y2="21.005" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#00BAFF"></svg:stop><svg:stop offset=".67" stop-color="#05207D"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedEmp2" x1="21.19" x2="3.231" y1="14.434" y2="15.199" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#03DDFE"></svg:stop><svg:stop offset=".41" stop-color="#0058C1"></svg:stop><svg:stop offset=".69" stop-color="#00136C"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedEmpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
