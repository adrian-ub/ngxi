import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatUiUserInterfaceIcon],svg[flat-ui-user-interface-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#EBEDEE" d="M4 0h92a4 4 0 0 1 4 4v92a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path><svg:path fill="#fff" d="M10 20h80v70H10z"></svg:path><svg:path fill="#E74C3C" d="M13 7a3 3 0 1 1 0 6a3 3 0 0 1 0-6"></svg:path><svg:path fill="#F39C12" d="M23 7a3 3 0 1 1 0 6a3 3 0 0 1 0-6"></svg:path><svg:path fill="#17A085" d="M33 7a3 3 0 1 1 0 6a3 3 0 0 1 0-6"></svg:path><svg:path fill="#fff" d="M45 7h45v6H45z"></svg:path><svg:path fill="#BDC3C7" d="M20 45v5h25v-5zm0 15h25v-5H20zm0 10h25v-5H20zm0 10h25v-5H20z"></svg:path><svg:path fill="#1ABC9C" d="M20 30h60v10H20z"></svg:path><svg:path fill="#BDC3C7" d="M50 45v15h30V45zm0 35h30V65H50z"></svg:path>`,
})
export class FlatUiUserInterfaceIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
