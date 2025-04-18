import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilCelsiusIcon],svg[uil-celsius-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 19h-6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h6a1 1 0 0 0 0-2h-6a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5h6a1 1 0 0 0 0-2M5 3a3 3 0 1 0 3 3a3 3 0 0 0-3-3m0 4a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path>`,
})
export class UilCelsiusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
