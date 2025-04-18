import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionCashSharpIcon],svg[ion-cash-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 368h416v32H48zm32 48h352v32H80zm400-240a96.11 96.11 0 0 1-96-96V64H128v16a96.11 96.11 0 0 1-96 96H16v64h16a96.11 96.11 0 0 1 96 96v16h256v-16a96.11 96.11 0 0 1 96-96h16v-64ZM256 304a96 96 0 1 1 96-96a96.11 96.11 0 0 1-96 96"></svg:path><svg:path fill="currentColor" d="M96 80V64H16v80h16a64.07 64.07 0 0 0 64-64M32 272H16v80h80v-16a64.07 64.07 0 0 0-64-64m448-128h16V64h-80v16a64.07 64.07 0 0 0 64 64m-64 192v16h80v-80h-16a64.07 64.07 0 0 0-64 64"></svg:path><svg:circle cx="256" cy="208" r="64" fill="currentColor"></svg:circle>`,
})
export class IonCashSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
