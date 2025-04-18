import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorVault20Icon],svg[fluent-color-vault-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorVault200)" d="M2 7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3z"></svg:path><svg:path fill="url(#fluentColorVault203)" fill-opacity=".5" d="M2 7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3z"></svg:path><svg:path fill="url(#fluentColorVault204)" fill-opacity=".5" d="M2 7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3z"></svg:path><svg:path fill="url(#fluentColorVault201)" fill-rule="evenodd" d="M14.354 7.646a.5.5 0 0 0-.708 0l-.63.63A2 2 0 0 0 12 8c-.37 0-.718.101-1.016.277l-.63-.63a.5.5 0 0 0-.708.707l.63.63A2 2 0 0 0 10 10c0 .37.101.718.277 1.016l-.63.63a.5.5 0 0 0 .707.708l.63-.63a2 2 0 0 0 2.032-.001l.63.63a.5.5 0 0 0 .708-.707l-.63-.63a2 2 0 0 0-.001-2.032l.63-.63a.5.5 0 0 0 0-.708M12 11a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path><svg:path fill="url(#fluentColorVault202)" fill-rule="evenodd" d="M5.5 7a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0v-5a.5.5 0 0 1 .5-.5" clip-rule="evenodd"></svg:path><svg:defs><svg:lineargradient id="fluentColorVault200" x1="1.5" x2="8.485" y1="3" y2="20.581" gradientUnits="userSpaceOnUse"><svg:stop offset=".005" stop-color="#88E06C"></svg:stop><svg:stop offset="1" stop-color="#0078D4"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorVault201" x1="9.937" x2="10.769" y1="7.588" y2="12.947" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FDFDFD"></svg:stop><svg:stop offset="1" stop-color="#CCEAFF"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorVault202" x1="5.087" x2="8.372" y1="7.105" y2="10.634" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FDFDFD"></svg:stop><svg:stop offset="1" stop-color="#CCEAFF"></svg:stop></svg:lineargradient><svg:radialgradient id="fluentColorVault203" cx="0" cy="0" r="1" gradientTransform="matrix(2.85714 2.4 -1.79729 2.13962 12.857 10.6)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#4A43CB"></svg:stop><svg:stop offset="1" stop-color="#4A43CB" stop-opacity="0"></svg:stop></svg:radialgradient><svg:radialgradient id="fluentColorVault204" cx="0" cy="0" r="1" gradientTransform="matrix(0 3.6 -1.39306 0 6.571 10.6)" gradientUnits="userSpaceOnUse"><svg:stop offset=".024" stop-color="#4A43CB" stop-opacity=".7"></svg:stop><svg:stop offset="1" stop-color="#4A43CB" stop-opacity="0"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorVault20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
