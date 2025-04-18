import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamBoxIcon],svg[jam-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 0h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3m0 2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm10.874 5a4.002 4.002 0 0 1-7.748 0H2V5h16v2zm-2.142 0H8.268a2 2 0 0 0 3.464 0"></svg:path>`,
})
export class JamBoxIcon {
  readonly viewBox = input("-2 -4 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
