import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSecurityKeyOutlineSharpIcon],svg[material-symbols-light-security-key-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.808 22v-4.558H7V2h10v15.442h-1.808V22zM12 12.02q.962 0 1.635-.668t.673-1.621q0-.97-.674-1.649q-.673-.678-1.634-.678t-1.634.678t-.674 1.649q0 .953.674 1.62q.673.668 1.634.668M9.808 21h4.404v-3.558H9.808zM8 16.442h8V3H8zm4-5.423q-.54 0-.914-.37t-.375-.918q0-.54.371-.934q.37-.393.918-.393q.54 0 .934.393q.393.394.393.934t-.393.914t-.934.374m-4 5.423h8z"></svg:path>`,
})
export class MaterialSymbolsLightSecurityKeyOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
