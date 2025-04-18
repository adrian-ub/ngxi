import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSkydroidIcon],svg[arcticons-skydroid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.47 26.5H42.5v16H26.47zm-20.97 0h16v16h0a16 16 0 0 1-16-16m0-21h16v0a16 16 0 0 1-16 16h0zm20.97 0a16 16 0 0 1 16 16v0h0h-16h0z"></svg:path>`,
})
export class ArcticonsSkydroidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
