import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeArduinoIcon],svg[material-icon-theme-arduino-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#0097A7" d="M2 14h10v2H2zm22-4h2v10h-2z"></svg:path><svg:path fill="#0097A7" d="M20 14h10v2H20z"></svg:path><svg:path fill="none" stroke="#0097A7" stroke-width="2" d="M2 5h4a10 10 0 0 1 10 10a10 10 0 0 0 10 10h4"></svg:path><svg:path fill="#0097A7" d="M11.644 22A8.95 8.95 0 0 1 6 24H2v2h4a10.98 10.98 0 0 0 8.479-4ZM26 4a10.98 10.98 0 0 0-8.479 4h2.835A8.95 8.95 0 0 1 26 6h4V4Z"></svg:path>`,
})
export class MaterialIconThemeArduinoIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
