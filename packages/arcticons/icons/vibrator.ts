import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsVibratorIcon],svg[arcticons-vibrator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m15.218 9.518l-8.651 8.177l8.473 8.234l-8.235 7.942l8.828 8.629m17.532-37l8.237 7.851l-8.205 8.004l8.236 8.236l-8.682 8.357"></svg:path><svg:circle cx="23.994" cy="23.707" r="3.364"></svg:circle></svg:g>`,
})
export class ArcticonsVibratorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
