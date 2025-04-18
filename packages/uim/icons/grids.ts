import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimGridsIcon],svg[uim-grids-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 21V3a1 1 0 0 0-1-1h-5v20h5a1 1 0 0 0 1-1" opacity=".5"></svg:path><svg:path fill="currentColor" d="M1 3v18a1 1 0 0 0 1 1h5V2H2a1 1 0 0 0-1 1"></svg:path><svg:path fill="currentColor" d="M9 2h6v20H9z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M7 2h2v20H7zm8 0h2v20h-2z" opacity=".25"></svg:path>`,
})
export class UimGridsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
