import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiMelillaFlagIcon],svg[openmoji-melilla-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#61b2e4" d="M5 17h62v38H5z"></svg:path><svg:path fill="none" stroke="#d22f27" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M31.62 34.32h8.784c0 10.31-2.035 10.34-4.416 10.34c-2.431 0-4.368.094-4.368-10.34"></svg:path><svg:path fill="none" stroke="#fff" stroke-dasharray="2 4" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M31.62 34.32h8.784c0 10.31-2.035 10.34-4.416 10.34c-2.431 0-4.368.094-4.368-10.34"></svg:path><svg:path fill="none" stroke="#f1b31c" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M30.94 31.3c3.306-.871 6.684-.904 10.14 0"></svg:path><svg:path fill="none" stroke="#f1b31c" stroke-linecap="round" stroke-width="2" d="M35.98 27.48v3.032m-6.43-1.622l1.396 2.911M42.48 28.89l-1.396 2.911"></svg:path><svg:path fill="none" stroke="#5c9e31" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M30.94 46.78c3.306.871 6.684.904 10.14 0"></svg:path><svg:path fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2" d="m29.03 34.44l.008 9.079M43.11 34.44l-.008 9.079"></svg:path><svg:path fill="#f4aa41" d="M34.26 37.68h3.53c.028 2.18-3.571 2.013-3.53 0m-.01 3.83h3.53c.028 2.18-3.571 2.013-3.53 0"></svg:path><svg:path fill="none" stroke="#186648" stroke-linecap="round" d="M33.6 36.67c.409.252.629.513 1.93.513m2.93-.513c-.409.252-.629.513-1.93.513m-2.95 3.307c.409.252.629.513 1.93.513m2.93-.513c-.409.252-.629.513-1.93.513"></svg:path><svg:path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M30.99 27.05c3.314-3.702 6.655-3.638 10.02 0m-10.02 0l-2.686-.57m12.706.57l2.686-.57"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiMelillaFlagIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
