import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiMoonIcon],svg[oi-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.72 0A3.99 3.99 0 0 0 0 3.78c0 2.21 1.79 4 4 4c1.76 0 3.25-1.14 3.78-2.72c-.4.13-.83.22-1.28.22c-2.21 0-4-1.79-4-4c0-.45.08-.88.22-1.28"></svg:path>`,
})
export class OiMoonIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
