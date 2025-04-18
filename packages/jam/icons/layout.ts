import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamLayoutIcon],svg[jam-layout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 18h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h4V8H2V6h14v2H9zM3 0h12a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3"></svg:path>`,
})
export class JamLayoutIcon {
  readonly viewBox = input("-3 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
