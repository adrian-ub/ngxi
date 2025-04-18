import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[formkitPasswordIcon],svg[formkit-password-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.35 16H2.65C1.74 16 1 15.26 1 14.35v-7.7C1 5.74 1.74 5 2.65 5h10.7c.91 0 1.65.74 1.65 1.65v7.69c0 .91-.74 1.65-1.65 1.65ZM2.65 6c-.36 0-.65.29-.65.65v7.69c0 .36.29.65.65.65h10.7c.36 0 .65-.29.65-.65V6.65c0-.36-.29-.65-.65-.65z"></svg:path><svg:path fill="currentColor" d="M12.54 6H3.46V4.54C3.46 2.04 5.5 0 8 0s4.54 2.04 4.54 4.54zM4.46 5h7.08v-.46C11.54 2.59 9.95 1 8 1S4.46 2.59 4.46 4.54z"></svg:path><svg:circle cx="12" cy="10.5" r="1" fill="currentColor"></svg:circle><svg:circle cx="8" cy="10.5" r="1" fill="currentColor"></svg:circle><svg:circle cx="4" cy="10.5" r="1" fill="currentColor"></svg:circle>`,
})
export class FormkitPasswordIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
