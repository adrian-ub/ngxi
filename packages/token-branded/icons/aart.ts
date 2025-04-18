import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedAartIcon],svg[token-branded-aart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedAart0)" d="M15.071 3.844H8.93L3 20.156h5.44l.747-2.081a3.376 3.376 0 0 1 1.8-5.074L12 10.144L13.012 13a3.375 3.375 0 0 1 1.806 5.074l.743 2.081H21z"></svg:path><svg:path fill="url(#tokenBrandedAart1)" d="M12 18.469a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedAart0" x1="7.018" x2="14.761" y1="5.009" y2="19.656" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#51A7DC"></svg:stop><svg:stop offset=".19" stop-color="#3B578E"></svg:stop><svg:stop offset=".45" stop-color="#67BBCE"></svg:stop><svg:stop offset=".69" stop-color="#382F4A"></svg:stop><svg:stop offset=".79" stop-color="#A22B2C"></svg:stop><svg:stop offset=".9" stop-color="#E08C94"></svg:stop><svg:stop offset="1" stop-color="#CE7782"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedAart1" x1="7.018" x2="14.761" y1="5.009" y2="19.656" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#51A7DC"></svg:stop><svg:stop offset=".19" stop-color="#3B578E"></svg:stop><svg:stop offset=".45" stop-color="#67BBCE"></svg:stop><svg:stop offset=".69" stop-color="#382F4A"></svg:stop><svg:stop offset=".79" stop-color="#A22B2C"></svg:stop><svg:stop offset=".9" stop-color="#E08C94"></svg:stop><svg:stop offset="1" stop-color="#CE7782"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedAartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
