import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneFlagForBurkinaFasoIcon],svg[emojione-flag-for-burkina-faso-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#83bf4f" d="M32 62c16.6 0 30-13.4 30-30H2c0 16.6 13.4 30 30 30"></svg:path><svg:path fill="#ed4c5c" d="M32 2C15.4 2 2 15.4 2 32h60C62 15.4 48.6 2 32 2"></svg:path><svg:path fill="#ffce31" d="m32 36.8l5.6 4.2l-2.1-6.9l5.5-4.2h-6.9L32 23l-2.1 6.9H23l5.5 4.2l-2.1 6.9z"></svg:path>`,
})
export class EmojioneFlagForBurkinaFasoIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
