import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenManaIcon],svg[token-mana-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.205 6.863v7.706h6.637z"></svg:path><svg:path fill="currentColor" d="M3 14.569h6.206V6.863zm3.252 4.495a10.7 10.7 0 0 0 6.164 1.926c2.312 0 4.45-.717 6.165-1.926zM3 14.57c.32.687.722 1.334 1.197 1.926H15.93v-1.927zM16.29 12v5.78H21z"></svg:path><svg:path fill="currentColor" d="M11.584 17.78h4.705V12zm4.706-8.092a2.568 2.568 0 1 0 0-5.137a2.568 2.568 0 0 0 0 5.137m-7.084-4.11a1.284 1.284 0 1 0 0-2.567a1.284 1.284 0 0 0 0 2.567"></svg:path>`,
})
export class TokenManaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
