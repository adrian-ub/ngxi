import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatLockedIcon],svg[fluent-emoji-flat-locked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#D3D3D3" d="M16 2a6 6 0 0 0-6 6v3a6 6 0 0 0 12 0V8a6 6 0 0 0-6-6m0 2.5A3.5 3.5 0 0 1 19.5 8v3a3.5 3.5 0 1 1-7 0V8A3.5 3.5 0 0 1 16 4.5"></svg:path><svg:path fill="#F9C23C" d="M5 14a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3z"></svg:path><svg:path fill="#433B6B" d="M17.5 20.5a2.5 2.5 0 1 0-3 0V24a1.5 1.5 0 0 0 3 0z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatLockedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
