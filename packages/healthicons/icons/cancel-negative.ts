import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsCancelNegativeIcon],svg[healthicons-cancel-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsCancelNegative0)"><svg:path d="M24 42c4.97 0 9.47-2.015 12.728-5.272L11.272 11.272A17.94 17.94 0 0 0 6 24c0 9.941 8.059 18 18 18M12.765 9.936l25.299 25.3A17.92 17.92 0 0 0 42 24c0-9.941-8.059-18-18-18c-4.25 0-8.156 1.473-11.235 3.936"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsCancelNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsCancelNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
