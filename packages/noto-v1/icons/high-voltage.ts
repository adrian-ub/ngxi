import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1HighVoltageIcon],svg[noto-v1-high-voltage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fcc21b" d="M115.36 61.84L70.22 50.49L114.45 2.4a1.222 1.222 0 0 0-1.54-1.87L12.3 61.98c-.41.25-.64.72-.57 1.2c.06.48.4.87.87 1.01l45.07 13.25l-44.29 48.16c-.42.46-.44 1.15-.04 1.61c.24.29.58.44.94.44c.22 0 .45-.06.65-.19l100.78-63.41c.42-.26.64-.75.56-1.22c-.08-.49-.43-.88-.91-.99"></svg:path>`,
})
export class NotoV1HighVoltageIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
