import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedIdvIcon],svg[token-branded-idv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedIdv0)" d="M9.547 8.113h-.818v2.332a3.273 3.273 0 1 0 .082 4.23l-.438-.79a2.456 2.456 0 1 1 .323-1.68h.85z"></svg:path><svg:path fill="url(#tokenBrandedIdv1)" d="M17.729 15.887a3.273 3.273 0 1 0-2.516-5.367l.462.749a2.456 2.456 0 1 1-.401 1.264l-.655-.941c-.108.33-.163.675-.163 1.023v3.272h.818v-1.104a3.26 3.26 0 0 0 2.455 1.104"></svg:path><svg:path fill="#14B4FE" d="M3.026 12.204A3.272 3.272 0 0 0 8.81 14.68l-.437-.793a2.455 2.455 0 0 1-4.521-1.682z"></svg:path><svg:path fill="#1EBCFF" fill-rule="evenodd" d="M12.001 15.887a3.273 3.273 0 1 0 0-6.545a3.273 3.273 0 0 0 0 6.545m0-.818a2.454 2.454 0 1 0 0-4.908a2.454 2.454 0 0 0 0 4.908" clip-rule="evenodd"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedIdv0" x1="15.939" x2="16.587" y1="9.955" y2="13.261" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#14B4FE"></svg:stop><svg:stop offset=".66" stop-color="#1A2C58"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedIdv1" x1=".186" x2="3.687" y1="14.916" y2="8.834" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#122543"></svg:stop><svg:stop offset=".45" stop-color="#173C66"></svg:stop><svg:stop offset="1" stop-color="#5FC0F0"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedIdvIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
