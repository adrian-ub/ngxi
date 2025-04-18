import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamLayoutFIcon],svg[jam-layout-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 20V8h9v9a3 3 0 0 1-3 3zm-2 0H3a3 3 0 0 1-3-3V8h7zM18 6H0V3a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3z"></svg:path>`,
})
export class JamLayoutFIcon {
  readonly viewBox = input("-3 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
