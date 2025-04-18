import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsVibrafunIcon],svg[arcticons-vibrafun-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19 9h10v30H19zM6.5 9h10v30h-10zm25 0h10v30h-10zm10 25h1M29 34h2.5m-15 0H19M5.5 34h1m35-20h1M29 14h2.5m-15 0H19M5.5 14h1"></svg:path>`,
})
export class ArcticonsVibrafunIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
