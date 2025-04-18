import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinZapIcon],svg[catppuccin-zap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#eed49f" stroke-linecap="round" stroke-linejoin="round" d="M2.85 9.301a.644.65 0 0 1-.502-1.06L8.72 1.605a.322.325 0 0 1 .554.3L8.039 5.82a.644.65 0 0 0 .605.878h4.506a.644.65 0 0 1 .502 1.06L7.28 14.395a.322.325 0 0 1-.554-.3l1.236-3.916a.644.65 0 0 0-.605-.878Z"></svg:path>`,
})
export class CatppuccinZapIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
