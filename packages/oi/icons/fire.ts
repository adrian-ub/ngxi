import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiFireIcon],svg[oi-fire-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 0c1 2-2 3-2 5s2 3 2 3c-.98-1.98 2-3 2-5S2 0 2 0m3 3c1 2-2 3-2 5h3c.4 0 1-.5 1-2c0-2-2-3-2-3"></svg:path>`,
})
export class OiFireIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
