import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamBoxFIcon],svg[jam-box-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 5H0V3a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3zm0 2v6a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V7h6.126a4.002 4.002 0 0 0 7.748 0z"></svg:path>`,
})
export class JamBoxFIcon {
  readonly viewBox = input("-2 -4 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
