import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosEslintOldIcon],svg[logos-eslint-old-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3A33D1" d="M100.034 262.106L.598 172.57L28.45 41.694L155.626.354l99.436 89.535l-27.851 130.876zm-48.086-106.18l59.291 53.307l75.828-24.695l16.645-78.004l-59.291-53.417l-75.828 24.805z"></svg:path><svg:path fill="#6464E2" d="M181.301 223.92H74.359l-53.525-92.69l53.525-92.69h106.942l53.525 92.69zM93.18 191.283h69.3l34.705-60.053l-34.705-60.053h-69.3L58.584 131.23z"></svg:path>`,
})
export class LogosEslintOldIcon {
  readonly viewBox = input("0 0 256 263")
  readonly width = input("0.98em")
  readonly height = input("1em")
}
